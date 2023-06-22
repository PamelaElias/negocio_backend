const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "backend_user",
password: "Password5",
database:"productsdb" 
})

module.exports = db;