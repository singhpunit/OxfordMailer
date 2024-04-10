const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user =require("./router/users.js")
const app = express();
const PORT = 6000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
// Define your routes here

// Start the server

app.use("/user",user)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
