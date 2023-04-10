const Router = require('express')
const { createOrder, addProduct, getAllOrders } = require('../controllers/order.controller')
const { createOrderValidatior } = require('../validatiors/order.validatior')
const { createProductInOrder } = require('../validatiors/productInOrderValidatior')
const authenticate = require('../middleware/auth.middleware')

const router = Router()

router.get('/order', getAllOrders)

router.post('/orders', createOrderValidatior, authenticate, createOrder)

router.post('/orders/add', createProductInOrder ,addProduct)

// router.delete('/order/:id', deleteOrder)

module.exports = router