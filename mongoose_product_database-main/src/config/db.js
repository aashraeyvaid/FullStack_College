import mongoose from "mongoose";

const mongoUri = process.env.MONGO_URI || "mongodb+srv://vasu:vasu2007@cluster0.vawug1q.mongodb.net/?appName=Cluster0";

const connectDb = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default connectDb;
