const express = require("express");
const router = express.Router();

// Import the controller function
const { createTodo } = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");

// Define the POST route for creating a new Todo
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);

// Export the router so it can be used in the app
module.exports = router;
