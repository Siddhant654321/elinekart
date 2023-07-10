import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";

const port = process.env.PORT || 3500;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.listen(port, () => console.log(`Server is running on port ${port}`));
