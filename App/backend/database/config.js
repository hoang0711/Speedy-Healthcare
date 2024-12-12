// Citation for the following function:
// Date: 11/20/2024
// Adapted from:
// Source URL: https://github.com/osu-cs340-ecampus/react-starter-app/blob/main/App/backend/database/config.js


// Get an instance of mysql we can use in the app
const mysql = require("mysql2");
require("dotenv").config();

// const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.RAILWAY_PRIVATE_DOMAIN}:3306/${process.env.MYSQL_DATABASE}`

// Create a 'connection pool' using the provided credentials
const connection = mysql.createConnection({
  host: "junction.proxy.rlwy.net",
  user: "root",
  password: "UQGXLZGSUllLSIkfZdZoWUtrsWRovXDH",
  database: "railway",
});

// mysql://root:UQGXLZGSUllLSIkfZdZoWUtrsWRovXDH@junction.proxy.rlwy.net:40986/railway
// Export it for use in our application
module.exports = connection;

