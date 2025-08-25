
import { NextRequest, NextResponse } from 'next/server';
import  { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from 'mongodb';
function generateRandomLetters(length: number): string {
  const letters = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
}

const restuarantsCollection = await dbConnect(collections.restaurants);

export async function POST(req: Request) {
  try {
    const restaurant = await req.json();

    // Check if restaurant with the given email or phone already exists
    const findRestaurant = await restuarantsCollection.findOne({ 
      $or: [
        { email: restaurant?.email },
        { phone: restaurant?.phone }
      ]
    });

    if (findRestaurant) {
      return NextResponse.json(
        { message: "Email or phone number already exists, try another email or phone number" },
        { status: 400 }
      );
    }

    

    const randomLetters = generateRandomLetters(6);
    const restaurantId = `${randomLetters}`;

    // Save to database
    const admin = await restuarantsCollection.insertOne({
      ...restaurant,
      restaurantId, // Add the generated ID
      createdAt: new Date(),
      updatedAt: new Date(),
      role: "restaurant",
      isActive: "pending",
    });

    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: 'An error occurred while creating the restaurant.' },
      { status: 500 }
    );
  }
}

// Helper function to generate random letters


