const {Router} = require('express')
const { createCar, addToCar, getUserProducts } = require('../controllers/car.controller')
const { createCarValidatior } = require('../validatiors/cars.validatior')
const { createProductIncar } = require('../validatiors/productsIncar.validatior')
const authenticate = require('../middleware/auth.middleware')

const router = Router()

router.get('/car/:idUsePro', authenticate, getUserProducts)

router.post('/cars', createCarValidatior, authenticate, createCar)

router.post('/cars/add', createProductIncar, authenticate, addToCar)

module.exports = router