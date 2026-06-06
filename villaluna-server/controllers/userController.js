const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users." });
  }
};

// POST /api/users (SignUp/Create user)
const createUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      age,
      gender,
      contactNumber,
      email,
      type,
      username,
      password,
      address,
    } = req.body;

    const existingEmail = await User.findOne({ email: email?.toLowerCase() });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists." });
    }

    // Hash password before save (never plain text).
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      age,
      gender,
      contactNumber,
      email: email.toLowerCase(),
      type,
      username,
      password: hashedPassword,
      address,
      status: "active",
    });

    const safeUser = user.toObject();
    delete safeUser.password;

    res.status(201).json({
      message: "User created successfully.",
      user: safeUser,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user." });
  }
};

// PUT /api/users/:id
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePayload = { ...req.body };

    // If password is included and not empty, hash it. Otherwise, remove from payload.
    if (updatePayload.password && updatePayload.password.trim() !== "") {
      const salt = await bcrypt.genSalt(10);
      updatePayload.password = await bcrypt.hash(updatePayload.password, salt);
    } else {
      delete updatePayload.password;
    }

    const updatedUser = await User.findByIdAndUpdate(id, updatePayload, {
      new: true,
      runValidators: true,
    }).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({ message: "User updated successfully.", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user." });
  }
};

// DELETE /api/users/:id
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    res.json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete user." });
  }
};

// POST /api/users/login
const loginUser = async (req, res) => {
  try {
    const { usernameOrEmail, password } = req.body;

    const user = await User.findOne({
      $or: [{ email: usernameOrEmail?.toLowerCase() }, { username: usernameOrEmail }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    if (user.status !== "active") {
      return res.status(403).json({ message: "Your account is inactive." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Required role logic:
    // viewer must NOT log in
    if (user.type === "viewer") {
      return res.status(403).json({ message: "Viewer accounts are not allowed to log in." });
    }

    const token = jwt.sign(
      {
        id: user._id,
        type: user.type,
        firstName: user.firstName,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        type: user.type,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed." });
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
};
