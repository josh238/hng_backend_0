const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const app = express();
require("dotenv").config();

// Middlewares
app.use(cors());

// Rate Limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, try again later",
});
app.use(limiter);

// Routes
//  @route  GET /
//  @desc   Home route
app.get("/", (_, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to my dynamic profile API",
  });
});

//  @route  GET /me
//  @desc   Get my profile data
app.get("/me", async (_, res) => {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.status == 200) {
      res.status(500);
      throw new Error(response.error || "An error occurred. Try again later");
    }

    const data = await response.json();
    if (!data) {
      res.status(500);
      throw new Error("Couldn't fetch cat fact. Try again later");
    }
    res.status(200).json({
      status: "success",
      user: {
        email: "joshuaadelere28@gmail.com",
        name: "Joshua Adelere",
        stack: "Node.js/Express",
      },
      timestamp: new Date(),
      fact: data.fact,
    });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
});

// Route not found Handler
app.use((req, res, next) => {
  res.status(404);
  throw new Error("page not found");
});

// Error Handler
app.use((err, req, res, next) => {
  return res.json({
    status: "failure",
    message: err.message || "An error occurred",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});