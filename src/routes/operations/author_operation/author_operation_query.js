const { connection } = require('../../../config/database');

module.exports = {
    /*
        Create author operation : When creating an author, we first call the create_author 
        route before creating the associated operation in order to have access to authorId
    */
    create_author_operation: function(date, comment, userId, authorId, operationTypeId, callback) {
        const query = "INSERT INTO author_operation(date, comment, id_user, id_author, id_operation_type) values(?, ?, ?, ?, ?);";
        const params = [date, comment, userId, authorId, operationTypeId];
        connection.query(query, params, function (error, results) {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results);
        });
    },

    update_author_operation: function(authorOperationId, date, comment, callback) {
        const query = "UPDATE author_operation SET date = ?, comment = ? WHERE id = ?";
        const params = [date, comment, authorOperationId];
        connection.query(query, params, function (error, results) {
            if (error) {
                return callback(error, null);
            }
            return callback(null, results);
        });
    }
}