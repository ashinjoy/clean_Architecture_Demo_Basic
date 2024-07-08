import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isblocked:{
        type:Boolean,
        default:false
    }
})
const userModel = mongoose.model('user',userSchema)
export {userModel}