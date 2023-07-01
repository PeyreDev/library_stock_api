const { connection } = require('../../../config/database');

module.exports = {
    /*
        Create author operation : When creating an author, we first call the create_author 
        route before creating the associated operation in order to have access to authorId
    */
    createAuthorOperation: function(date, comment, userId, authorId, operationTypeId, callback) {
        const query = "INSERT INTO author_operation(date, comment, id_user, id_author, id_operation_type) values(?, ?, ?, ?, ?);";
        const params = [date, comment, userId, authorId, operationTypeId];
        connection.query(query, params, function (error, results) {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results);
        });
    },

    updateAuthorOperation: function(authorOperationId, date, comment, callback) {
        const query = "UPDATE author_operation SET date = ?, comment = ? WHERE id = ?";
        const params = [date, comment, authorOperationId];
        connection.query(query, params, function (error, results) {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results);
        });
    },

    getAuthorOperationById: function(authorOperationId, callback) {
        const query = "SELECT * FROM author_operation WHERE id = ?";
        connection.query(query, [authorOperationId], function (error, results) {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results[0]);
        });
    }
}