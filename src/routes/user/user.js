const express = require('express');
const router = express.Router();
const user_query = require('./user_query');

// Get User by Id
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  user_query.getUserById(userId, (error, result) => {
    if (error) {
      return res.status(400).json({ message:'Une erreur s\'est produite lors de la récupération de l\'utilisateur.'});
    }
    return res.status(200).json(result);
  });
});

// Get User by Mail

// Create User

// Delete User

// Update User

module.exports = router;