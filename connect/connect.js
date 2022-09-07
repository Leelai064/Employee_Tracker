// my sql installation
const mysql = require('mysql2');

// Found a setup guide that helped me in W3schools
module.exports = connect;
connection = mysql.createConnection({
    
    host:'localhost',
    user:"root",
    password: 'rootroot',
    database: '',
    mutipleStatements:true

});

confirm.connect(function(err){
    if (err){
        console.log((err));
        return;
    }

    console.log()
});
