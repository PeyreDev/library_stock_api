const { connection } = require('../../config/database');

module.exports = {
  getUserById: function (userId, callback) {
    const query = 'SELECT * FROM user WHERE id = ?';
    connection.query(query, [userId], function (error, results) {
      if (error) {
        return callback(error, null);
      }
      if (results.length === 0) {
        return callback('Utilisateur introuvable', null);
      }
      return callback(null, results[0]);
    });
  },

  // Autres fonctions pour la création, la mise à jour et la suppression des utilisateurs
};