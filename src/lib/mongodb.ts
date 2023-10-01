import mongoose from "mongoose";

const mongoURI: string = process.env.MONGODB_URI as string;

export const connectMongoDB = async () => {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(mongoURI);
      console.log("MongoDB connected successfully");
    }
    return mongoose.connections[0];
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};
