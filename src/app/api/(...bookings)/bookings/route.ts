import { NextRequest, NextResponse } from 'next/server';
import { dbConnect, collections } from '@/lib/dbConnect';
import { decryptRestaurantObjectId } from '@/lib/restaurantUniqueApi';


const bookingsCollection = await dbConnect(collections.bookings);
const restaurantsCollection = await dbConnect(collections.restaurants);
export async function POST(req: NextRequest) {
    const referer = req.headers.get('referer') || '';
  const bookingReference = new URL(referer).searchParams.get('bookingRef') || '';
  if (!bookingReference) {
    return NextResponse.json(
      { error: 'Booking reference is required' },
      { status: 400 }
    );
  }

  try {
    // Authorization check (commented out as in your example)
    // const referer = req.headers.get('referer') || '';
    // const refererPath = new URL(referer).pathname;
    // const authResult = await authorizationCheck(refererPath);
    // if (!authResult.success) {
    //   return NextResponse.json(
    //     { error: authResult.error },
    //     { status: authResult.status }
    //   );
    // }

    
    const data = await req.json();

    // // Validate required fields
    // const requiredFields = [
    //   'name', 
    //   'email', 
    //   'phone', 
    //   'bookingDate', 
    //   'bookingTime', 
    //   'numberOfPeople',
    //   'restaurantId'
    // ];
    
    // const missingFields = requiredFields.filter(field => !data[field]);
    // if (missingFields.length > 0) {
    //   return NextResponse.json(
    //     { error: `Missing required fields: ${missingFields.join(', ')}` },
    //     { status: 400 }
    //   );
    // }

    // // Validate email format
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(data.email)) {
    //   return NextResponse.json(
    //     { error: 'Invalid email format' },
    //     { status: 400 }
    //   );
    // }

    // // Validate phone number (basic check)
    // if (data.phone.length < 8) {
    //   return NextResponse.json(
    //     { error: 'Phone number must be at least 8 digits' },
    //     { status: 400 }
    //   );
    // }

    // // Validate booking date is in the future
    // const bookingDateTime = moment(`${data.bookingDate} ${data.bookingTime}`);
    // if (bookingDateTime.isBefore(moment())) {
    //   return NextResponse.json(
    //     { error: 'Booking date and time must be in the future' },
    //     { status: 400 }
    //   );
    // }

    // // Validate number of people
    // if (data.numberOfPeople < 1 || data.numberOfPeople > 20) {
    //   return NextResponse.json(
    //     { error: 'Number of people must be between 1 and 20' },
    //     { status: 400 }
    //   );
    // }
    const bookingReferenceInfo = await restaurantsCollection.findOne({ restaurantId : bookingReference  });
    // // Check for existing booking at same time
    const existingBooking = await bookingsCollection.find({
      bookingDate: data.bookingDate,
      bookingTime: data.bookingTime,
    }).toArray();

    if (existingBooking.length > 7) {
      return NextResponse.json(
        { error: 'Maximum booking limit reached for this time slot' },
        { status: 409 }
      );
    }

    // Create new booking
    const newBooking = {
      ...data,
      bookingDate: data.bookingDate,
      bookingTime: data.bookingTime,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'confirmed',
      bookingReference: bookingReferenceInfo?._id.toString() // Use the booking reference from the URL
    };

    const result = await bookingsCollection.insertOne(newBooking);

    return NextResponse.json(
      { 
        success: true,
        bookingId: result.insertedId,
        bookingReference: newBooking.bookingReference,
        message: 'Booking created successfully' 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your booking' },
      { status: 500 }
    );
  }
}

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
    // Fetch all bookings from the database
   const bookingReferenceInfo = await restaurantsCollection.findOne({ restaurantId : bookingReference  } , {
    projection: {
      name: 1,
      email: 1,
      phone: 1,
      address: 1,
      
    }
   });

    if (bookingReferenceInfo) {
      return NextResponse.json(bookingReferenceInfo, { status: 200 });
    } else {
      return NextResponse.json(
        { message: 'No bookings found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: 'An error occurred while fetching users.' },
      { status: 500 }
    );
  }
}