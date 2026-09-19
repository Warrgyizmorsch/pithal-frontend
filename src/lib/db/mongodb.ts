import mongoose from "mongoose";

// SRV connection string
const SRV_MONGODB_URI =
  "mongodb+srv://ranjitwarrgyizmorsch_db_user:HHk01PfKPFSx89A7@cluster0.pivoizu.mongodb.net/pithal_db?retryWrites=true&w=majority&appName=Cluster0";

// Direct shard connection string (bypasses SRV DNS queries for maximum reliability)
const DIRECT_MONGODB_URI =
  "mongodb://ranjitwarrgyizmorsch_db_user:HHk01PfKPFSx89A7@ac-nb7call-shard-00-00.pivoizu.mongodb.net:27017,ac-nb7call-shard-00-01.pivoizu.mongodb.net:27017,ac-nb7call-shard-00-02.pivoizu.mongodb.net:27017/pithal_db?ssl=true&replicaSet=atlas-542r28-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose | null> | null;
  listenersAttached: boolean;
}

declare global {
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
  listenersAttached: false,
};
global.mongooseCache = cached;

// Attach connection event listeners to auto-heal on socket drops
function ensureListeners() {
  if (cached.listenersAttached) return;
  cached.listenersAttached = true;

  mongoose.connection.on("disconnected", () => {
    console.warn("[MongoDB Warning] Socket disconnected. Resetting connection cache for auto-reconnect.");
    cached.conn = null;
    cached.promise = null;
  });

  mongoose.connection.on("error", (err) => {
    console.error("[MongoDB Error] Connection encountered an error:", err?.message || err);
    cached.conn = null;
    cached.promise = null;
  });

  mongoose.connection.on("close", () => {
    console.warn("[MongoDB Warning] Socket closed. Resetting connection cache.");
    cached.conn = null;
    cached.promise = null;
  });
}

function isDbConnected(): boolean {
  return (mongoose.connection.readyState as number) === 1;
}

function isDbConnecting(): boolean {
  return (mongoose.connection.readyState as number) === 2;
}

export async function connectDB(): Promise<typeof mongoose | null> {
  ensureListeners();

  // If already connected, return immediately
  if (isDbConnected()) {
    cached.conn = mongoose;
    return mongoose;
  }

  // If already in the process of connecting, wait for that attempt
  if (cached.promise && isDbConnecting()) {
    try {
      const conn = await cached.promise;
      if (conn && isDbConnected()) {
        cached.conn = conn;
        return conn;
      }
    } catch {
      // Fall through to start a clean attempt
    }
  }

  // Connection options with active keep-alive to prevent Atlas 300s idle timeout
  const opts: mongoose.ConnectOptions = {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    heartbeatFrequencyMS: 10000,
    maxPoolSize: 10,
    minPoolSize: 1,
    maxIdleTimeMS: 60000,
  };

  const primaryUri = process.env.MONGODB_URI || DIRECT_MONGODB_URI;
  const secondaryUri = primaryUri === DIRECT_MONGODB_URI ? SRV_MONGODB_URI : DIRECT_MONGODB_URI;

  cached.promise = (async () => {
    try {
      const m = await mongoose.connect(primaryUri, opts);
      console.log("[MongoDB Log] Connected successfully to Cloud Atlas!");
      return m;
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.warn("[MongoDB Warning] Primary connection failed, attempting fallback:", errMsg);

      try {
        const fallbackM = await mongoose.connect(secondaryUri, opts);
        console.log("[MongoDB Log] Connected successfully via fallback connection!");
        return fallbackM;
      } catch (fallbackErr: unknown) {
        const fallbackErrMsg = fallbackErr instanceof Error ? fallbackErr.message : String(fallbackErr);
        console.error("[MongoDB Error] Fallback connection also failed:", fallbackErrMsg);
        return null;
      }
    }
  })();

  try {
    const conn = await cached.promise;
    if (conn && isDbConnected()) {
      cached.conn = conn;
      return conn;
    }
    cached.conn = null;
    cached.promise = null;
    return null;
  } catch (err) {
    console.error("[MongoDB Error] Failed during connectDB:", err);
    cached.conn = null;
    cached.promise = null;
    return null;
  }
}
