const mysql = require('promise-mysql')
const {IS_LOCAL, DB_USER, DB_PASS} = process.env

const pool = mysql.createPool({
  host: 'localhost',
  user: IS_LOCAL ? 'root' : DB_USER,
  password: IS_LOCAL ? '' : DB_PASS,
  // run ` DB_USER='db_username' DB_PASS='your_password' pm2 start index.js`
  // to start server so you don't have to write password in source code
  // (notice: there is a space at begining so that bash will not log this command in history)
  database: 'db_name',
  connectionLimit: 5,
  charset: 'UTF8MB4_GENERAL_CI'
})
const query = (...args) => pool.query(...args)

module.exports = {query, pool}
