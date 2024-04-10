const User = require("../model/userModel.js");
const connection = require("../model/userModel.js");
const mail = require("./mailService.js")

module.exports = {
  contactDetails: async (req, res) => {
   try{
    const userData = req.body; // Assuming client sends JSON data
    let user = await new User(userData)
    user.save()
    res
    .status(201)
    .json({ message: "Data inserted successfully" });
    mail.mailer(userData)
   }
   catch(err){
    console.log(err)
    res.status(500).json({ error: "Internal server error" ,message:err})
   }
  },

  createUserTable:async()=>{
    connection.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating table: ' + err.stack);
            return;
        }
        console.log('Table created successfully');
    });
  }
};
