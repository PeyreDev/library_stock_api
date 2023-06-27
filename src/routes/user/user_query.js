const { connection } = require('../../config/database');

module.exports = {
  getUserById: function (userId, callback) {
    const query = 'SELECT * FROM user WHERE id = ?';
    connection.query(query, [userId], function (error, results) {
      if (error) {
        return callback(error, null);
      }
      if (results.length === 0) {
        return callback('User not found', null);
      }
      return callback(null, results[0]);
    });
  },

  getUserByMail: function (mail, callback) {
    const query = 'SELECT * FROM user WHERE mail = ?';
    connection.query(query, [mail], function (error, results) {
      if (error) {
        return callback(error, null);
      }
      if (results.length === 0) {
        return callback('User not found', null);
      }
      return callback(null, results[0]);
    });
  },

  createUser: function (name, first_name, mail, password, role_id, callback) {
    const query = "INSERT INTO user(name, first_name, mail, password, id_user_role) VALUES(?, ?, ?, ?, ?);";
    const params = [name, first_name, mail, password, role_id];
    connection.query(query, params, function (error, results) {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  },

  updateUser: function (userId, name, firstname, mail, password, callback) {
    const query = "UPDATE user SET name = ?, first_name = ?, mail = ?, password = ? WHERE id = ?";
    const params = [name, firstname, mail, password, userId];
    connection.query(query, params, function (error, results) {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }
};