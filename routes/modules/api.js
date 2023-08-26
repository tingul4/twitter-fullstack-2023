const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user-controller')
const { authenticated } = require('../../middleware/auth')

router.get('/users/:id', authenticated, userController.getEditPage)
router.post('/users/:id', authenticated, userController.editUser)

module.exports = router