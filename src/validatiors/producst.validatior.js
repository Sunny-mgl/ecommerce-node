const { check } = require("express-validator");
const validationResults = require("../utils/validate");


const createProductValidatior = [
    check('name')
        .exists()
        .withMessage('name must exist')
        .notEmpty()
        .withMessage('name must not be empty')
        .isString()
        .withMessage('name format must be a string')
        .isLength({ min: 10, max: 30 })
        .withMessage('name must have a min of 6 characters and a max of 30'),
    check(' description')
        .exists()
        .withMessage('The description must exist')
        .notEmpty()
        .withMessage('The description must not be empty')
        .isString()
        .withMessage('The description format must be a string')
        .isLength({ max: 300 })
        .withMessage('The description must have a max of 300 characters'),
    check('price')
        .exists()
        .withMessage('price must exist')
        .notEmpty()
        .withMessage('price must bot be empty')
        .isInt()
        .withMessage('price must be an integer'),
    check('availableQty')
        .withMessage('availableQty must exist')
        .notEmpty()
        .withMessage('availableQty must bot be empty')
        .isInt()
        .withMessage('availableQty must be an integer'),
    check('userId')
        .withMessage('userId must exist')
        .notEmpty()
        .withMessage('userId must bot be empty')
        .isInt()
        .withMessage('userId must be an integer'),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

const updateProductValidatior = [
    check('name')
        .exists()
        .withMessage('name must exist')
        .notEmpty()
        .withMessage('name must not be empty')
        .isString()
        .withMessage('name format must be a string')
        .isLength({ min: 10, max: 30 })
        .withMessage('name must have a min of 6 characters and a max of 30'),
    check(' description')
        .exists()
        .withMessage('The description must exist')
        .notEmpty()
        .withMessage('The description must not be empty')
        .isString()
        .withMessage('The description format must be a string')
        .isLength({ max: 300 })
        .withMessage('The description must have a max of 300 characters'),
    check('availableQty')
        .withMessage('availableQty must exist')
        .notEmpty()
        .withMessage('availableQty must bot be empty')
        .isInt()
        .withMessage('availableQty must be an integer'),

        (req, res, next) => {
            validationResults(req, res, next)
        }
]

module.exports= {
    createProductValidatior,
    updateProductValidatior
}