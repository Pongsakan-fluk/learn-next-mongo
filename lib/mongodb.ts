import mongoose from "mongoose";

//Connect MongoDB
export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL!);
        console.log("Connected to mongoDB!");
        
    } catch(err) {
        console.log("Can not connected to mongoDB!");
        
    }
}