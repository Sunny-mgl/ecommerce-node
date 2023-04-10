const { check } = require("express-validator");
const validationResults = require("../utils/validate");

const createProductIncar = [
    check("carId")
        .exists()
        .withMessage('carId must exist')
        .notEmpty()
        .withMessage('carId must bot be empty')
        .isInt()
        .withMessage('carId must be an integer'),
    check('productsId')
        .exists()
        .withMessage('productsId must exist')
        .notEmpty()
        .withMessage('productsId must bot be empty')
        .isInt()
        .withMessage('productsId must be an integer'),
    check('quantity')
        .exists()
        .withMessage('productsId must exist')
        .notEmpty()
        .withMessage('productsId must bot be empty')
        .isInt()
        .withMessage('productsId must be an integer'),
    check('price')
        .exists()
        .withMessage('price must exist')
        .notEmpty()
        .withMessage('price must bot be empty')
        .isFloat()
        .withMessage('price must be float'),
    check('status')
        .exists()
        .withMessage('status must exist')
        .notEmpty()
        .withMessage('status must bot be empty')
        .isBoolean()
        .withMessage('status must be a Boolean'),
    (req, res, next) => {
        validationResults(req, res, next)
    }

]

const updateProductInCar = [
    check('productsId')
        .exists()
        .withMessage('productsId must exist')
        .notEmpty()
        .withMessage('productsId must bot be empty')
        .isInt()
        .withMessage('productsId must be an integer'),
    check('quantity')
        .exists()
        .withMessage('quantity must exist')
        .notEmpty()
        .withMessage('quantity must bot be empty')
        .isInt()
        .withMessage('quantity must be an integer'),
    check('price')
        .exists()
        .withMessage('price must exist')
        .notEmpty()
        .withMessage('price must bot be empty')
        .isFloat()
        .withMessage('price must be float'),
    check('status')
        .exists()
        .withMessage('status must exist')
        .notEmpty()
        .withMessage('status must bot be empty')
        .isBoolean()
        .withMessage('status must be a Boolean'),
    (req, res, next) => {
        validatquantity(req, res, next)
    }
]

module.exports = {
    createProductIncar,
    updateProductInCar
}