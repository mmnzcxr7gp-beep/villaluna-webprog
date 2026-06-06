const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true, enum: ["male", "female", "other"] },
    contactNumber: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    type: { type: String, required: true, enum: ["admin", "editor", "viewer"] },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    address: { type: String, required: true, trim: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
