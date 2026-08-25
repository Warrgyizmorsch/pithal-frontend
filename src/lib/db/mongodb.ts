import mongoose from "mongoose";

// SRV connection string (works on Vercel/cloud platforms with DNS resolution)
const SRV_MONGODB_URI = "mongodb+srv://ranjitwarrgyizmorsch_db_user:HHk01PfKPFSx89A7@cluster0.pivoizu.mongodb.net/pithal_db?retryWrites=true&w=majority&appName=Cluster0";

// Direct connection string (fallback for environments without SRV DNS support)
const DIRECT_MONGODB_URI = "mongodb://ranjitwarrgyizmorsch_db_user:HHk01PfKPFSx89A7@ac-nb7call-shard-00-00.pivoizu.mongodb.net:27017,ac-nb7call-shard-00-01.pivoizu.mongodb.net:27017,ac-nb7call-shard-00-02.pivoizu.mongodb.net:27017/pithal_db?ssl=true&replicaSet=atlas-542r28-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

const MONGODB_URI = process.env.MONGODB_URI || SRV_MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };
global.mongooseCache = cached;

export async function connectDB(): Promise<typeof mongoose | null> {
  // If connection is already open and ready, return it immediately
  if (cached.conn && mongoose.connection.readyState === 1) {
    return cached.conn;
  }

  // If a connection is not already being established, initiate one
  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: true,
      serverSelectionTimeoutMS: 15000,
      connectTimeoutMS: 15000,
      socketTimeoutMS: 45000,
    };

    cached.promise = (async () => {
      try {
        const m = await mongoose.connect(MONGODB_URI, opts);
        console.log("[MongoDB Log] Connected successfully to Cloud Atlas!");
        return m;
      } catch (err: unknown) {
        const errMsg = err instanceof Error ? err.message : String(err);
        console.warn("[MongoDB Warning] Primary SRV connection failed:", errMsg);

        // Try direct URI fallback if SRV failed
        if (MONGODB_URI !== DIRECT_MONGODB_URI) {
          try {
            console.log("[MongoDB Log] Retrying with direct connection string...");
            const directM = await mongoose.connect(DIRECT_MONGODB_URI, opts);
            console.log("[MongoDB Log] Connected successfully via direct connection string!");
            return directM;
          } catch (directErr: unknown) {
            const directErrMsg = directErr instanceof Error ? directErr.message : String(directErr);
            console.warn("[MongoDB Warning] Direct connection also failed:", directErrMsg);
          }
        }
        return null;
      }
    })();
  }

  try {
    cached.conn = await cached.promise;
    if (!cached.conn || mongoose.connection.readyState !== 1) {
      cached.conn = null;
      cached.promise = null; // Clear so next invocation can attempt connection again
      return null;
    }
    return cached.conn;
  } catch (err) {
    console.error("[MongoDB Error] Failed during connectDB execution:", err);
    cached.conn = null;
    cached.promise = null;
    return null;
  }
}
