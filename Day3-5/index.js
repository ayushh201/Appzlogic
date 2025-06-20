import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();

app.get("/", (req,res) => {
    res.send("Hello World");
});

app.listen(4000, () => {
    connectDB();
    console.log("Server is running on port 4000");
});
