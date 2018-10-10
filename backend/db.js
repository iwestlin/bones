const mysql = require('promise-mysql')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'db_user',
  password: process.env.DB_PASS,
  // run ` DB_PASS='your_password' pm2 start index.js` (notice: there is a space at begining so that bash will not log this command in history) to start server so you don't have to write password in source code
  database: 'db_name',
  connectionLimit: 5,
  charset: 'UTF8MB4_GENERAL_CI'
})
const query = (...args) => pool.query(...args)

module.exports = {query, pool}
