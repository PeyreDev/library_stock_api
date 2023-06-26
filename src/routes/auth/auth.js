const auth_middleware = require("../../middleware/auth_middleware");
const {connection} = require("../../config/database");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

router.post("/login", function(req, res) {
        console.log("request login");
        const { mail, password } = req.body;
        if (!mail || !password) {
            return res.status(400).json({ message: "Please enter both email and password." });
        }
        auth_middleware.account_exists(mail, function (response) {
            if (!response) {
                return res.status(400).json({ message: "This account doesn't exists."})
            }
            connection.query("SELECT * FROM user WHERE mail = ?", [mail], function (err, result, field) {
                if (err) {
                    return res.status(400).json({ message: "An error occurred while retrieving user data." });
                }
                if (!result.length || !bcrypt.compareSync(password, result[0].password)) {
                    return res.status(400).json({ message: "Invalid mail or password" });
                }
                return res.status(200).json({ message: "User logged in." });
            })
        })
})

module.exports = router;