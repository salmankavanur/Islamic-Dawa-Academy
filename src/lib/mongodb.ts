import mongoose from 'mongoose';

// Define a type for the cached connection
interface MongooseCache {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
}

// Use a type assertion for the global object
declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache;
}

// MongoDB connection string from environment variables with fallback
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/islamic-dawa-academy';

// Validate and normalize the URI
if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined in environment variables');
}

// Remove any trailing slashes and log the URI for debugging
const normalizedURI = MONGODB_URI.replace(/\/+$/, '');
console.log('Attempting to connect to MongoDB with URI:', normalizedURI);

// Cache the MongoDB connection
let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectToDatabase(): Promise<mongoose.Mongoose> {
  if (cached.conn) {
    console.log('Using cached MongoDB connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(normalizedURI, opts).then((mongooseInstance) => {
      console.log('Successfully connected to MongoDB with URI:', normalizedURI);
      return mongooseInstance;
    }).catch((error) => {
      console.error('MongoDB connection failed:', error);
      cached.promise = null; // Reset promise on failure
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}

export default connectToDatabase;