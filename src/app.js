import serverConfig from "./framework/express.js";
import { dbConnect } from "./config/db.js";
const app = serverConfig();
dbConnect();
export { app };
