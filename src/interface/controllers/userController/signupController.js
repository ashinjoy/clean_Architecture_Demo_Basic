export class Signup {
  constructor(dependencies) {
    console.log(dependencies);
    this.signupUsecase = new dependencies.usecase.createUserUseCase(
      dependencies
    );
  }
  async userSignup(req, res) {
    try {
      console.log("controller");
      const { email, name, password } = req.body;
      const data = {
        email,
        name,
        password,
      };
      const userCreated = await this.signupUsecase.execute(data);
      res.json({
        userid: userCreated._id,
        name: userCreated.name,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
