import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database/db.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import userRouter from "./router/userRouter.js";
import section1Router from "./router/section1Router.js";
import section2ARouter from "./router/section2ARouter.js";
import section2BRouter from "./router/section2BRouter.js";
import section3Router from "./router/section3Router.js";
import section4Router from "./router/section4Router.js";
import pdfRouter from "./pdfCreator.js";

const app = express();
config({ path: "./config/config.env" });

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, "./client/build")));

// app.use("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/enrollment/section1", section1Router);
app.use("/api/v1/enrollment/section2A", section2ARouter);
app.use("/api/v1/enrollment/section2B", section2BRouter);
app.use("/api/v1/enrollment/section3", section3Router);
app.use("/api/v1/enrollment/section4", section4Router);
app.use("/api/v1/pdf", pdfRouter);
dbConnection();

app.use(errorMiddleware);
export default app;
