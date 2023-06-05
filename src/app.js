import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
import productRouter from "./routes/product";

// Config
dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// connect

app.use("/api", authRouter);
app.use("/api", productRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/nodejs-angular")
  .then(() => {
    console.log("DB is connected");
  })
  .catch(() => {
    console.log("Error connecting");
  });

export const viteNodeApp = app;
