const express = require('express');
const app = express();

// Define a simple GET route
app.get('/', (req, res) => {
    console.log("This is my BE");
    res.send("Hello from VGamifyTodo_BE!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});