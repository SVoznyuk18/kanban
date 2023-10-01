import mongoose from "mongoose";

const mongoURI: string | undefined = process.env.MONGODB_URI;

export const connectMongoDB = async () => {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect('mongodb+srv://svoznyuk18:eWWiCkoAn8itWpS0@cluster0.wauchy2.mongodb.net/kanban_db');
      console.log("MongoDB connected successfully");
    }
    return mongoose.connections[0];
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1);
  }
};
