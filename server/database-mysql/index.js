const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'bedoui123',
  database : 'store'
});

connection.connect((err)=>{
 err ? console.log(err) : console.log("Jawna mriguel !");
})


module.exports = connection;