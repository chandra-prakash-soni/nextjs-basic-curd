import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // Replace 'your_database_name' with the name of your MongoDB database

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    console.log(`server connect with ${connection}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectDB;
