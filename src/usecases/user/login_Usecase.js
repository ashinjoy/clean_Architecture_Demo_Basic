export class loginUseCase {
  constructor(dependencies) {
    this.authUserRepository = new dependencies.repository.userLoginRepository();
  }
  async execute(email, password) {
    return await this.authUserRepository.findByEmailAndPassword(email,password)
     
  }
}
