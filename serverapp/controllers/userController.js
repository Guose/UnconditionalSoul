// userController.js

const userModel = require('../models/userModel')

module.exports = {
  // Create
  createUser: async (req, res) => {
    try {
      const { 
        firstname, 
        lastname, 
        username, 
        password, 
        email, 
        phonenumber, 
        birthdate 
      } = req.body

      const userId = await userModel.createUser({
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        email: email,
        phoneNumber: phonenumber,
        birthdate: birthdate
      })

      res.status(201).json({ userId })

    } catch (error) {
      res.status(500).json({ error: 'Unable to create user' })
    }
  },

  // Retrieve All Users
  getAllUsers: async (req, res) => {
    try {
      const users = await userModel.getAllUsers()
      if (users) {
        res.json(users)
      } else {
        res.status(404).json({ error: 'Users not found' })
      }
    } catch (error) {
      res.status(500).json({error: 'Unable to fetch users'})
    }
  },

  // Retrieve User by Id
  getUserById: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await userModel.getUserById(userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch user' });
    }
  },


  // Update
  updateUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const updatedData = req.body; // Assuming you send the updated data in the request body
      await userModel.updateUser(userId, updatedData);
      res.json({ message: 'User updated successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to update user' });
    }
  },

  // Delete
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      await userModel.deleteUser(userId);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete user' });
    }
  },
}