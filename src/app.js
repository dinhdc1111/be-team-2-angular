import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

// Config
dotenv.config();
const app = express();
// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
// connect
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});