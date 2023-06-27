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
      return res.status(400).json({ message: 'An error occurred while retrieving the user' });
    }
    return res.status(200).json(result);
  });
});

// Create User
router.post('/create', (req, res) => {
  const { name, first_name, mail, password, role_id } = req.body;

  if (!name || !first_name || !mail || !password || !role_id) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  user_query.createUser(
    name, first_name, mail, password, role_id,
    (error, result) => {
      if (error) {
        return res.status(400).json({ message: 'An error occured creating the user' });
      }
      return res.status(200).json(result);
    }
  );
});

// Update User
router.post('/update/:id', (req, res) => {
  const userId = req.params.id;
  const { name, first_name, mail, password} = req.body;
  user_query.updateUser(
    userId, name, first_name, mail, password,
    (error, result) => {
      if (error) {
        return res.status(400).json({ message: 'An error updating the user -> ' + error });
      }
      return res.status(200).json(result);
    }
  );
});

// Delete User

module.exports = router;