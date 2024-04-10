const connection = require("../dbConnection/db.js");
const mail = require("./mailService.js")
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        person_name VARCHAR(50) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        enquiry VARCHAR(150) NOT NULL,
        school_name VARCHAR(150) NOT NULL,
        school_location VARCHAR(150) NOT NULL,
        contact_number VARCHAR(150) NOT NULL,
        message VARCHAR(350) NOT NULL
    )
`;
module.exports = {
  contactDetails: async (req, res) => {
    const userData = req.body; // Assuming client sends JSON data
    connection.query("INSERT INTO users SET ?", userData, (err, result) => {
      if (err) {
        console.error("Error inserting data into database: " + err.stack);
        res.status(500).json({ error: "Internal server error" ,message:err.stack});
        return;
      }
      mail.mailer(userData)
      console.log("Data inserted into database with ID " + result.insertId);
      res
        .status(201)
        .json({ message: "Data inserted successfully", id: result.insertId });
    });
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
