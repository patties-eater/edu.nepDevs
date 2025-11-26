import dotenv from "dotenv";
dotenv.config();

import server from "./src/server/index.js";
import { connectDB } from "./src/mongodb/db/connect.js";

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB();
    server.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
  }
};

start();
