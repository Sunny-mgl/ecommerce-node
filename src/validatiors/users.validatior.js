const { check, param } = require("express-validator");
const validationResults = require("../utils/validate");


const createUserValidatior = [
    check('username')
        .exists()
        .withMessage('username must exist')
        .notEmpty()
        .withMessage('username must not be empty')
        .isString()
        .withMessage('username format must be a string')
        .isLength({ min: 6, max: 30 })
        .withMessage('username must have a min of 6 characters and a max of 30'),
    check('email')
        .exists()
        .withMessage('The email must exist')
        .notEmpty()
        .withMessage('The email must not be empty')
        .isString()
        .withMessage('The email format must be a string')
        .isEmail()
        .withMessage('The email do not have email format'),
    check('password')
        .exists()
        .withMessage('passowrd must exist')
        .notEmpty()
        .withMessage('password must not be empty')
        .isString()
        .withMessage('password format must be a string')
        .isLength({ min: 6 })
        .withMessage('The password must have a min of 6 characters'),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

const updateUserValidatior = 
[ check('username')
        .exists()
        .withMessage('username must exist')
        .notEmpty()
        .withMessage('username must not be empty')
        .isString()
        .withMessage('username format must be a string')
        .isLength({ min: 6, max: 30 })
        .withMessage('username must have a min of 6 characters and a max of 30'),
    (req, res, next) => {
        validationResults(req, res, next)
    }
]

module.exports = {
    createUserValidatior,
    updateUserValidatior
}