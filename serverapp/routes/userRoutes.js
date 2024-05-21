// userRoutes.js

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Define routes for user management
router.post('/users', userController.createUser)
router.get('/users/:userId', userController.getUserById)
router.get('/users', userController.getAllUsers)
router.delete('/users/:userId', userController.deleteUser)
router.put('/users/:userId', userController.updateUser)

module.exports = router