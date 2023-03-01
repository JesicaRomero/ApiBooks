const mysql = require('mysql2')
require('dotenv').config()

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
})

connection.connect((err) =>
  err ? console.log(err) : console.log('Conexión correcta')
)

module.exports = connection
