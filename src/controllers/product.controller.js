const ProductService = require("../services/product.service")
const { products } = require('../models')

const getAllProduct = async (req, res, next) => {
  try {
    const getProduc = await ProductService.getAll()
    res.status(201).json(getProduc)
  } catch (error) {
    next(error)
  }
}

// const getProductsGreaterTo0 = async (req, res, next) => {
//   try {
//     const {price} = req.body
//     const getPro = await products.findAll({price})
//     if(!getPro > 0){
//       return  next({
//         status: 300,
//         message: 'thi produc is free'
//       })
//     }
//     res.json(getPro)
//   } catch (error) {
//     next(error)
//   }
// }



const createProduct = async (req, res, next) => {
  try {
    const body = req.body
    const createPro = await ProductService.creates(body)
    res.status(201).json(createPro)
  } catch (error) {
    next(error)
  }
}

const updateProductDescription = async (req, res, next) => {
  try {
    const {id} = req.params
    const updateDescription = req.body
     await ProductService.updatess(updateDescription, id)
    res.status(201).send()
  } catch (error) {
    next(error)
    // console.log(error)
  }
}

module.exports = {
  getAllProduct,
  // getProductsGreaterTo0,
    createProduct,
    updateProductDescription,

}