const express = require("express");

const {
  signup,
  login,
  getMe,
  updateProfile
} = require("../controllers/authController");

const { protect } = require("../middleware/auth");

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);

// Protected routes
router.get("/me", protect, getMe);
router.put("/profile", protect, updateProfile);

module.exports = router;