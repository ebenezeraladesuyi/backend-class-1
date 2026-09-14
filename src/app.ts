import express from "express";
import profileRouter from "./routes/profileRoutes.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/user.routes.js";
import newUserRouter from "./routes/newUserRoutes.js";

const app = express();

app.use(express.json())

app.use("/profile" ,profileRouter)
app.use("/auth", authRouter)
app.use("/user", userRouter)

app.use("/new-user", newUserRouter)



export default app;