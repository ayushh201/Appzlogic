import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js"; // default import
import userRoutes from "./routes/userRoutes.js"; // import routes

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// API routes
app.use("/api/users", userRoutes);

// Start server after DB is connected
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
});
