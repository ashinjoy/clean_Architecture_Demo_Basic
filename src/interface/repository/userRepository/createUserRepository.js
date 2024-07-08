import { userModel } from "../../database/schema/userSchema.js";

export class CreateUserRepository {
  async createUser(data) {
    try {
      console.log("repository");
      const createdUser = await userModel.create(data);
      return createdUser;
    } catch (error) {
      console.error(error);
    }
  }
}
