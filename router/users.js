const express = require('express')
const { contactDetails } = require('../controller/users.js')
const route = express.Router()

route.post("/",contactDetails)
module.exports = route