export class createUser {
  constructor(dependencies) {
    this.createUserRepository = new dependencies.repository.CreateUserRepository();
      
  }
  async execute(data) {
    try {
      console.log("usecase");
      return await this.createUserRepository.createUser(data);
      
      
    } catch (error) {
      console.error(error);
    }
  }
}
