import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDB;
