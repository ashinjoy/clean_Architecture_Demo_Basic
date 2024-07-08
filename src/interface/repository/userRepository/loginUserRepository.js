import { userModel } from "../../database/schema/userSchema.js";
export class userLoginRepository{
    async findByEmailAndPassword(email,password){
        return await userModel.findOne({
            email,
            password
        })
    }
}