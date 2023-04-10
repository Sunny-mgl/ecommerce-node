const {Router} = require('express')
const {  createUser, updateUser, updateAvatar, getAllUsers } = require('../controllers/user.controller')
const { createUserValidatior, updateUserValidatior } = require('../validatiors/users.validatior')
const authenticate = require('../middleware/auth.middleware')

const router = Router()

router.get('/users', authenticate, getAllUsers)
router.post('/user', createUserValidatior, createUser) 
router.put('/user/:id', updateUserValidatior, updateUser)
router.put('/avatar/:id', updateAvatar)

module.exports = router