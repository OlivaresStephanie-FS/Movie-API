const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

router.post("/register", async (req, res) => {
	try {
		const { email, password } = req.body;

		const existingUser = await User.findOne({ email });

		if (existingUser) {
			return res.status(400).json({
				message: "User already exists",
			});
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await User.create({
			email,
			password: hashedPassword,
		});

		res.status(201).json({
			message: "User created",
			userId: user._id,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

router.post("/login", async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await User.findOne({ email });

		if (!user) {
			return res.status(401).json({
				message: "Invalid credentials",
			});
		}

		const validPassword = await bcrypt.compare(
			password,
			user.password
		);

		if (!validPassword) {
			return res.status(401).json({
				message: "Invalid credentials",
			});
		}

		const token = jwt.sign(
			{
				id: user._id,
				email: user.email,
			},
			JWT_SECRET,
			{
				expiresIn: "1d",
			}
		);

		res.json({
			token,
		});
	} catch (error) {
		res.status(500).json({
			message: error.message,
		});
	}
});

module.exports = router;