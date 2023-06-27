const { closeDatabaseConnection } = require('../src/config/database');

module.exports = async () => {
  console.log("teardown function : MySQl connexion pending closing..");
  await closeDatabaseConnection();

  // Using process.exit(0) to remove error msg : "Jest did not exit one second after the test run has completed."
  process.exit(0);
};                                                                     