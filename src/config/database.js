const mysql = require("mysql");
require("dotenv").config();

// MySQL Database Configuration
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Close Database connexion function
const closeDatabaseConnection = () => {
  return new Promise((resolve, reject) => {
    connection.end((error) => {
      if (error) {
        reject(error);
      } else {
        console.log("Connexion closed successfuly");
        isDatabaseConnected = false;
        resolve();
      }
    });
  });
};

// Signal handler for database connexion end & process.exit on Ctrl+C key press
process.on('SIGINT', async () => {
  console.log('Closing the application...');
  try {
      await closeDatabaseConnection();
      console.log('Database connection closed.');
      process.exit(0);
  } catch (err) {
      console.error('Error closing the database connection:', err);
      process.exit(1);
  }
});

module.exports = {
  connection,
  closeDatabaseConnection
};