const express = require('express');
const app = express();

// Define a simple GET route
app.get('/', (req, res) => {
    console.log("This is my BE");
    res.send("Hello from VGamifyTodo_BE!");
});

// Export the app as a serverless function
module.exports = app;