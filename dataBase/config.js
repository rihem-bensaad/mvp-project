var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'rihemnews'
});

connection.connect((err)=> { if (err) throw err ;
     console.log("database is connected")});

// method to save to DB, it takes vale as argument
  //  you export it to server

  

module.exports = connection ;