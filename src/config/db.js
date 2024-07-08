import mongoose from "mongoose";
import 'dotenv/config'

const mongo = process.env.MONGOSTRING
console.log(mongo)
export const dbConnect = async()=>{
    try {
         await mongoose.connect(process.env.MONGOSTRING)
        console.log('db concected Sucessfully ');
    } catch (error) {
        console.error(error)
    }
}