const {Router} = require('express')
const { updateProductDescription, getAllProduct, createProduct,} = require('../controllers/product.controller')
const { createProductValidatior, updateProductValidatior } = require('../validatiors/producst.validatior')
// const { createProductValidatior, updateProductValidatior } = require('../validatiors/producst.validatior')

const router= Router()

router.get('/product', getAllProduct)

router.post('/products',createProduct)

router.put('/products/:id', updateProductValidatior, updateProductDescription)

module.exports = router