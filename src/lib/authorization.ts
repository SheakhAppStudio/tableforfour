import { authOptions } from "@/lib/authOptions";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";

interface User {
  _id: ObjectId;
  name?: string;
  email?: string;
  role: 'user' | 'admin' | 'super admin';
  isActive?: boolean;
  permissions?: string[]; // Only used for admin routes
}

// Public routes accessible to all authenticated users
const PUBLIC_ROUTES = [
  '/dashboard/profile',
  '/dashboard/settings',
  '/api/user/profile'
];

// Route access configuration
const ROUTE_ACCESS = {
  // // User routes - all accessible to users
  // 'user': [
  //   '/dashboard/user',
  //   '/dashboard/user/list-of-orders',
  //   '/dashboard/user/account'
  // ],
  
  // Admin routes requiring specific permissions
  'admin': {
    '/dashboard/admin/users': 'manage-users',
    '/dashboard/admin/products': 'product',
    '/dashboard/admin/list-of-orders': 'order',
    '/dashboard/admin/settings': 'administration',
    '/dashboard/admin/category-management': 'administration',
    '/dashboard/admin/coupon-management': 'administration',
 
  },

  // Super admin has unrestricted access
  'super-admin': '*' // Wildcard for full access
};

type AuthorizationResult = 
  | { success: true; user: Omit<User, 'password'>; status: 200 }
  | { success: false; error: string; status: 401 | 403 | 404 | 500 };

async function checkAuthorization(requestPath?: string): Promise<AuthorizationResult> {
  try {
    const session = await getServerSession(authOptions);
    
    // 1. Authentication check
    if (!session?.user?.id) {
      return { success: false, error: "Authentication required", status: 401 };
    }

    // 2. Fetch user data
    const userCollection = await dbConnect(collections.users);
    const user = await userCollection.findOne({ 
      _id: new ObjectId(session.user.id) 
    }) as unknown as User;
console.log("User Data:", user);
    if (!user) {
      return { success: false, error: "User not found", status: 404 };
    }

    // // 3. Check account status
    // if (user.isActive === false) {
    //   return { success: false, error: "Account deactivated", status: 403 };
    // }

    // 4. Allow public routes
    if (requestPath && PUBLIC_ROUTES.some(route => requestPath.startsWith(route))) {
      return { success: true, user, status: 200 };
    }

    // 5. Handle super-admin (full access)
    if (user.role === 'super admin') {
      return { success: true, user, status: 200 };
    }

    // 6. Check user routes (full access for users)
    // if (user.role === 'user' && requestPath && ROUTE_ACCESS.user.some(route => requestPath.startsWith(route))) {
    //   return { success: true, user, status: 200 };
    // }

    // 7. Check admin routes (permission-based)
    if (user.role === 'admin' && requestPath) {
      const adminRoute = Object.entries(ROUTE_ACCESS.admin).find(
        ([route]) => requestPath.startsWith(route)
      );

      if (adminRoute) {
        const [_, requiredPermission] = adminRoute;
        if (user.permissions?.includes(requiredPermission)) {
          return { success: true, user, status: 200 };
        }
        return { 
          success: false, 
          error: `Required permission: ${requiredPermission}`, 
          status: 403 
        };
      }
    }

    // 8. Default deny
    return { 
      success: false, 
      error: "Access denied", 
      status: 403 
    };

  } catch (error) {
    console.error("Authorization error:", error);
    return { 
      success: false, 
      error: "Internal server error", 
      status: 500 
    };
  }
}

export { checkAuthorization };