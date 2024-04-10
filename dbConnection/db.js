var mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Graffersid@123",
    database: "mu2"
  })
connection.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Database Connected Successfully..!!');
	}
});

connection.query('CREATE DATABASE IF NOT EXISTS mu2', (err, result) => {
  if (err) {
      console.error('Error creating database: ' + err.stack);
      return;
  }
  console.log('Database created successfully');
});

module.exports = connection;