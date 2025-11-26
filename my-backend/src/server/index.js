import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

// Optional: health check
app.get("/", (req, res) => res.send("Server is running 🔥"));

export default app;
