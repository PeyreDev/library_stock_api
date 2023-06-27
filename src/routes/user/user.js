const express = require('express');
const router = express.Router();
const user_query = require('./user_query');

// Get User by Id
router.get('/id/:id', (req, res) => {
  const userId = req.params.id;
  user_query.getUserById(userId, (error, result) => {
    if (error) {
      return res.status(400).json({ message: 'An error occurred while retrieving the user' });
    }
    return res.status(200).json(result);
  });
});

// Get User by Mail
router.get('/mail/:mail', (req, res) => {
  const mail = req.params.mail;
  user_query.getUserByMail(mail, (error, result) => {
    if (error) {
      return res.status(400).json({ message: 'An error occurred while retrieving the user' })
    }
    return res.status(200).json(result);
  })
});

// Create User

// Delete User

// Update User

module.exports = router;