import { MongoClient, ServerApiVersion, Collection, Db } from "mongodb";

const collections = {
  users: "users",
  restaurants: "restaurants",   
  bookings: "bookings",
};

// Cache the MongoClient promise to avoid creating new connections
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  if (!uri) {
    throw new Error("MongoDB URI is not defined in environment variables");
  }

  const dbName = process.env.MONGODB_NAME;
  if (!dbName) {
    throw new Error("MongoDB database name is not defined in environment variables");
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
    maxPoolSize: 50, // Adjust based on your needs
    minPoolSize: 10, // Maintain some connections ready
    connectTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
  });

  try {
    await client.connect();
    await client.db(dbName).command({ ping: 1 });
    console.log("Successfully connected to MongoDB");

    cachedClient = client;
    cachedDb = client.db(dbName);

    return { client: cachedClient, db: cachedDb };
  } catch (error) {
    await client.close();
    throw error;
  }
}

// Graceful shutdown handler
process.on('SIGINT', async () => {
  if (cachedClient) {
    await cachedClient.close();
    cachedClient = null;
    cachedDb = null;
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  }
});

async function dbConnect<T extends Document = Document>(collectionName: string): Promise<Collection<T>> {
  try {
    const { db } = await connectToDatabase();
    return db.collection<T>(collectionName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error;
  }
}

export { dbConnect, collections };