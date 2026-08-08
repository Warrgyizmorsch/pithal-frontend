import mongoose from "mongoose";

const DIRECT_MONGODB_URI = "mongodb://ranjitwarrgyizmorsch_db_user:HHk01PfKPFSx89A7@ac-nb7call-shard-00-00.pivoizu.mongodb.net:27017,ac-nb7call-shard-00-01.pivoizu.mongodb.net:27017,ac-nb7call-shard-00-02.pivoizu.mongodb.net:27017/pithal_db?ssl=true&replicaSet=atlas-542r28-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const MONGODB_URI = process.env.MONGODB_URI || DIRECT_MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

export async function connectDB(): Promise<typeof mongoose | null> {
  // Check if connection is active (readyState === 1)
  if (cached?.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached?.promise || mongoose.connection.readyState !== 1) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000,
    };

    cached!.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((m) => {
        console.log("[MongoDB Log] Connected successfully to Cloud Atlas!");
        return m;
      })
      .catch((err) => {
        console.warn("[MongoDB Warning] Connection error:", err.message);
        if (cached) {
          cached.conn = null;
          cached.promise = null; // Reset so next request retries!
        }
        return null;
      });
  }

  try {
    cached!.conn = await cached!.promise;
    if (!cached!.conn) {
      cached!.promise = null;
    }
  } catch {
    cached!.conn = null;
    cached!.promise = null;
  }

  return cached!.conn;
}
