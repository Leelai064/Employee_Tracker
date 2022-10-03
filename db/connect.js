// my sql installation
const mysql = require('mysql2');

// Found a setup guide that helped me in W3schools
const connection = mysql.createConnection({
    
    host:'localhost',
    user:"root",
    password: 'rootroot',
    database: 'employee_db'    
});



module.exports = connection;