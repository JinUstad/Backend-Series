import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async () => {
    try {
      const connecttionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n connected to database ${connecttionInstance.connection.host}`)
    } catch (error) {
        console.log("database file file error ",error)
        process.exit(1)
    }
}   


export default connectToDB