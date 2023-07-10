import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";


const port = process.env.PORT || 3500;

connectDB(); // Connect to MongoDB

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.listen(port, () => console.log(`Server is running on port ${port}`));
