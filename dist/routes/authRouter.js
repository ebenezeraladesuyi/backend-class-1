import { Router } from "express";
import { login, register } from "../controller/authController.js";
const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
export default authRouter;
//# sourceMappingURL=authRouter.js.map