const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const user =require("./router/users.js")
const app = express();
const PORT = 6000;
const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/mu2"
// Middleware

app.use(cors()); // Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
        insretCountry()
        createAdmin()
    }

    )
    .catch((error) => console.log(error.message))



app.use("/user",user)

