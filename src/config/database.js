const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

const initDatabase = () => {
  return new Promise((resolve, reject) => {
    connection.connect((error) => {
      if (error) {
        reject(error);
      } else {
        console.log('Connected to the MySQL server.');
        resolve();
      }
    });
  });
};

const closeDatabaseConnection = () => {
  return new Promise((resolve, reject) => {
    connection.end((error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};

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
  initDatabase
}