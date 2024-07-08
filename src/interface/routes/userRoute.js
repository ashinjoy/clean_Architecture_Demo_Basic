import express from 'express'
import { Signup,Login} from '../controllers/index.js'
import { dependencies } from '../../config/dependencies.js'
 const userRouter = express.Router()
 console.log(Signup);
 console.log(dependencies);

 const controllers = {
    signupController: new Signup(dependencies),
    loginController : new Login(dependencies)
 }

 userRouter.post('/signup',(req,res)=>controllers.signupController.userSignup(req,res))
 userRouter.post('/login',(req,res)=>controllers.loginController.authenticateUser(req,res))



 export default userRouter