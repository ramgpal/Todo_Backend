// import the model
const { response } = require("express");
const Todo = require("../models/Todo");

// to create a todo
exports.getTodo = async (req, res) => {  // Corrected the async syntax
    try {
        // fetch all todo items from database
        const todos = await Todo.find({});
        
        // success msg
        res.status(200)
        .json({
            success: true,
            data : todos,
            message: "All data fetched successfully."
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
};



