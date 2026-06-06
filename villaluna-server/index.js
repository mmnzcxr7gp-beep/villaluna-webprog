const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ensure MongoDB is connected before handling any request (serverless-safe)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error("DB connection middleware error:", error.message);
    res.status(503).json({ message: "Database connection failed." });
  }
});

// Health check
app.get("/", (req, res) => {
  res.json({ message: "Villaluna MERN API is running." });
});

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/articles", articleRoutes);

// Global error fallback
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ message: "Internal server error." });
});

const PORT = process.env.PORT || 5000;

// Only listen when running locally (Vercel handles this in production)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export for Vercel serverless
module.exports = app;
