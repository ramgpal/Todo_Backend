// import the model
const Todo = require("../models/Todo");

// to create a todo
exports.createTodo = async (req, res) => {  // Corrected the async syntax
    try {
        // extract title and description from request body
        const { title, description } = req.body;

        // create a new todo object and insert it in DB
        const response = await Todo.create({ title, description });

        // send a response with success flag
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created successfully"
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: err.message,
        });
    }
};



