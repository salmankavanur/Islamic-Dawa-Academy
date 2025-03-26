import mongoose from 'mongoose';

// Define a type for the cached connection
interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Extend the global object
declare global {
  var mongoose: MongooseCache;
}

// MongoDB connection string from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

// Cache the MongoDB connection
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export default async function connectToDatabase(): Promise<mongoose.Mongoose> {
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      maxPoolSize: 10, // Adjust based on your needs
      serverSelectionTimeoutMS: 5000, // Timeout for server selection
    };

    console.log('Attempting to connect to MongoDB with URI:', MONGODB_URI.replace(/:([^:@]+)@/, ':****@')); // Mask password for logs

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      console.log('Successfully connected to MongoDB');
      return mongooseInstance;
    }).catch((error) => {
      console.error('MongoDB connection failed:', error);
      cached.promise = null; // Reset promise on failure
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
}