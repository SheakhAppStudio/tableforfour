
import { NextRequest, NextResponse } from 'next/server';
import  { dbConnect, collections } from "@/lib/dbConnect";


const restuarantsCollection = await dbConnect(collections.restaurants);


// Helper function to generate random letters


// GET method to fetch all users
export async function GET(req: NextRequest) {
    const referer = req.headers.get('referer') || '';
  const bookingReference = new URL(referer).searchParams.get('bookingRef') || '';
  if (!bookingReference) {
    return NextResponse.json(
      { error: 'Booking reference is required' },
      { status: 400 }
    );
  }
  try {
    // Fetch all users from the database
     const restaurant = await restuarantsCollection.findOne({restaurantId: bookingReference}, {
      projection: {
        restaurantName: 1,
        email: 1,
        phone: 1,
        logo: 1,
         openingTime: 1,
         closingTime: 1
      }
     });
     return NextResponse.json(restaurant, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: 'An error occurred while fetching users.' },
      { status: 500 }
    );
  }
}


