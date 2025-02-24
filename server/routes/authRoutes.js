/** @format */

const express = require("express");
const {
	login,
	verifyAccount,
	signup,
	forgotPassword,
	changePassword,
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-account", verifyAccount);
router.post("/forgot-password", forgotPassword);
router.post("/change-password/:token", changePassword);
module.exports = router;
