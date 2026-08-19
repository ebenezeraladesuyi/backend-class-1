import express from "express";
import profileRouter from "./routes/profileRoutes.js";
import authRouter from "./routes/authRouter.js";

const app = express();

app.use(express.json())

app.use("/profile" ,profileRouter)
app.use("/auth", authRouter)


export default app;