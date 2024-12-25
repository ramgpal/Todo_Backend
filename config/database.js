const mongoose = require("mongoose");
require("dotenv").config();

const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(DATABASE_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {
        console.error("DB connection failed:", error.message);
        process.exit(1); 
    });
};

module.exports = dbConnect;
