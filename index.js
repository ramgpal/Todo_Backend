const express = require("express");
const app = express();
const router = require("./routes/Todo");
require("dotenv").config();
const dbConnect = require("./config/database");

// Load config from .env file
const PORT = process.env.PORT || 4000;

// Database connection
dbConnect();

// Middleware to parse JSON request bodies
app.use(express.json());

// Import routes for Todo API
app.use("/api/v1", router);

// Default route
app.get("/", (req, res) => {
    res.send("Hi!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}!`);
});