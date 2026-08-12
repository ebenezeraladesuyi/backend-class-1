import express from "express";
import profileRouter from "./routes/profileRoutes.js";
const app = express();
app.use(express.json());
app.use("/profile", profileRouter);
export default app;
//# sourceMappingURL=app.js.map