const {Router} = require('express')
const { updateProductDescription, createProduct, getAllProduct,} = require('../controllers/product.controller')
// const { createProductValidatior, updateProductValidatior } = require('../validatiors/producst.validatior')

const router= Router()

router.get('/product', getAllProduct)

router.get('/productsGreater0', )

router.post('/products',  createProduct)

router.put('/products/:id',updateProductDescription)

module.exports = router