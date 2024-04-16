const express = require('express')
const { contactDetails,allUsers } = require('../controller/users.js')
const route = express.Router()

route.post("/",contactDetails)
route.get("/list",allUsers)
module.exports = route