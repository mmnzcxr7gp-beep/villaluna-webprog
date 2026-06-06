const mongoose = require("mongoose");

// Cache the connection promise so we don't reconnect on every serverless invocation
let cached = global._mongooseConnection;

const connectDB = async () => {
  if (cached && cached.readyState === 1) {
    return cached;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      bufferCommands: false,
    });
    cached = conn.connection;
    global._mongooseConnection = cached;
    console.log("MongoDB connected successfully.");
    return cached;
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    throw error; // Don't process.exit in serverless — let the request fail gracefully
  }
};

module.exports = connectDB;
