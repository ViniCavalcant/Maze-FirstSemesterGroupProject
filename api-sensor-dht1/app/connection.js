var mysql = require('mysql2');

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'Zoe35703570@',
    database : 'sprint2'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});



module.exports = connection;