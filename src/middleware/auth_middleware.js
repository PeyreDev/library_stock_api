module.exports = {
    account_exists : function(mail, callback) {
        connection.query("SELECT * FROM user WHERE mail = ?", [mail], function (err, res, field) {
            if (JSON.stringify(res[0]) == undefined)
                return callback(false);
            else
                return callback(true);
        });
    }
}