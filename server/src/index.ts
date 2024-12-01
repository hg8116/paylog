import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import groupRoutes from "./routes/groupRouter";
import expenseRoutes from "./routes/expenseRoutes";
import dotenv from "dotenv";
import { authenticate } from "./middleware/authenticate";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/groups", groupRoutes);
app.use("/expense", expenseRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.send("Expense Tracker API is running");
});

app.get("/test-auth", authenticate, (req: Request, res: Response) => {
  // @ts-ignore
  return res.status(200).json(req.user);
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
