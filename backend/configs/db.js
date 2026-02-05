import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGODB_URI;

    if (!MONGO_URI) {
      throw new Error("MONGODB_URI not defined");
    }

    mongoose.connection.on("connected", () => {
      console.log("✅ MongoDB connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ MongoDB disconnected");
    });

    await mongoose.connect(MONGO_URI, {
      dbName: process.env.MONGODB_DB || "todo_db",
    });

  } catch (error) {
    console.error("❌ DB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
