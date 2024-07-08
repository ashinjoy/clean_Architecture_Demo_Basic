import express from "express";
import userRouter from '../interface/routes/userRoute.js'
export default () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use('/',userRouter)
  return app
};
