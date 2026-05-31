const express = require("express");
require("dotenv").config();

const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

const movieRouter = require("./routes/movies");
const authRouter = require("./routes/auth");

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));

db.once("open", () => {
  console.log("Database Connection Established");
});

// API Routes
// API Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movies", movieRouter);

// React Build Folder
app.use(express.static(path.join(__dirname, "../reactjs/build")));

// Client Side Routes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../reactjs/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});