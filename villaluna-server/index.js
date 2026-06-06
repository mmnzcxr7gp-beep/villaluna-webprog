const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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
