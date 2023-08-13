import mongoose from "mongoose";

const mongoURI: string | undefined = process.env.MONGODB_URI;

export const connectMongoDB = async () => {
  try {
    // if (mongoURI === undefined) throw new Error('fail connect to mongoDB');
    await mongoose.connect('mongodb+srv://svoznyuk18:eWWiCkoAn8itWpS0@cluster0.wauchy2.mongodb.net/kanban_db');
    console.log("connected to mongoDb")
  } catch (error) {
    console.log(error);
  }
}
