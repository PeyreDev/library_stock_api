const auth_middleware = require("../../middleware/auth_middleware");
const connection = require("../../config/database");
const bcrypt = require("bcrypt");

module.exports = {
    login: function(req, res) {
        console.log("request login");
        if (!req.body.mail) {
            return res.status(400).json({ message: "Please enter an email." });
        }
        if (!req.body.password) {
            return res.status(400).json({ message: "Please enter a passwword." });
        }
        const { mail, password } = req.body;
        auth_middleware.account_exists(mail, function (response) {
            if (response === false) {
                return res.status(400).json({ message: "This account doesn't exists."})
            }
            connection.query("SELECT * FROM user WHERE mail = ?", [mail], function (err, result, field) {
                if (err) {
                    return res.status(400).json({ message: JSON.stringify(err) });
                }
                if (bcrypt.compareSync(password, result[0].password) === false) {
                    return res.status(400).json({ message: "Wrong password." });
                }
                return res.status(200).json({ message: "User logged in." });
            })
        })
    }
}