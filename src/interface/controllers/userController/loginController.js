export class Login{
    constructor(dependencies){
        this.loginUseCase = new dependencies.usecase.userLoginUseCase(dependencies)
    }
    async authenticateUser(req,res){
        try {
            const {email,password} = req.body
            const isUserLoggedIn = await this.loginUseCase.execute(email,password)
            if(isUserLoggedIn){
                res.status(200).json({
                    success:"User Logged In Sucessfully",
                    userid:isUserLoggedIn._id
                })
            }else{
                res.status(401).json({
                    failed:"You are UnAuthorized"
                })
            }

        } catch (error) {
            console.error(error);
        }
    }
    
}