import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n mongoDB is connected !! DB Hosted`)
    } catch (error) {
        console.error('Mongo db error', error)
    }
}

export default connectDB