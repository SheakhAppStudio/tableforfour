// app/api/users/set-password/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { collections, dbConnect } from '@/lib/dbConnect';
import { decryptRestaurantObjectId } from '@/lib/restaurantUniqueApi';
import { ObjectId } from 'mongodb';
import { sendCongratulationsEmail } from '@/app/api/(...email)/email/congratulations-email/congratulationEmail';


interface Users extends Document {
    userReference: string;
    userReferenceId: string;
    email: string;
    name: string;
    phone: string;
    address: string;
    isActive: string;
    createdAt: Date;
    updatedAt: Date;
    role: string;
    profilePhoto: string;
    oldPasswords: never[];
}
interface Restaurant extends Document {
  _id: ObjectId;
  ownerName: string;
  restaurantName: string;
  currentBookingMethod: string;
  email: string;
  phone: string;
  address: string;
  isActive: 'active' | 'inactive' | 'pending' | 'reject';
  createdAt: Date;
  updatedAt: Date;
  restaurantId: string;
  role: string;
  closingTime: string;
  logo: string;
  openingTime: string;
  totalSeats: string;
}

const userCollection = await dbConnect<Users>(collections.users);
const restaurantCollection = await dbConnect<Restaurant>(collections.restaurants);

export async function POST(req: NextRequest) {
        const referer = req.headers.get('referer') || '';
  const token = new URL(referer).searchParams.get('token') || '';
  if (!token) {
    return NextResponse.json(
      { error: 'Token is required' },
      { status: 400 }
    );
  }
    try {
        // Get the complete URL from the request
        const url = new URL(req.headers.get('referer') || req.headers.get('origin') || '');
        
        // Extract token and email from query parameters
        const token = url.searchParams.get('token') || '';
        const email = url.searchParams.get('email') || '';
        
        const data = await req.json();
        console.log(data.password ,data, "andnaidasiduahduhasdnasodnuu");
        // Validate required fields
        if (!data.password) {
            return NextResponse.json({ message: 'Password is required' }, { status: 400 });
        }

        if (!token || !email) {
            return NextResponse.json({ 
                message: 'Token and email are required in the URL parameters' 
            }, { status: 400 });
        }

        const findUser = await userCollection.findOne({ 
            email: decodeURIComponent(email),
            userReferenceId: decryptRestaurantObjectId(token) 
        });

        if (!findUser) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        if (findUser?.isActive !== 'not logged') {
            return NextResponse.json({ message: 'User already set password' }, { status: 403 });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(data?.password, 12);
        const updateDoc = { 
            $set: { 
                isActive: 'active', 
                password: hashedPassword,
                updatedAt: new Date() 
            } 
        };

        await userCollection.updateOne({ email: decodeURIComponent(email) }, updateDoc);
      const result =  await restaurantCollection.updateOne({ _id: new ObjectId(decryptRestaurantObjectId(token)) }, { 
            $set: { 
                totalSeats: data?.totalSeats,
                openingTime: data?.openingTime,
                closingTime: data?.closingTime,
                logo: data?.logo
            } 
        });
        if (result.modifiedCount === 1) {
            const restaurantInfo = await restaurantCollection.findOne({ _id: new ObjectId(decryptRestaurantObjectId(token)) });
            if (restaurantInfo){
 await sendCongratulationsEmail(restaurantInfo);
            }
           
            return NextResponse.json({ success: true });
        }

    } catch (error) {
        console.error('Password set error:', error);
        return NextResponse.json({ 
            message: 'Internal server error',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}