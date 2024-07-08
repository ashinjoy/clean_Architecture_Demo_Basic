import { app } from "./app.js";
import   "dotenv/config";

const PORT = process.env.PORT;
console.log(PORT);

const startServer = () => {
  app.listen(PORT, () => console.log("server started at http://localhost:3000"));
};
startServer();
