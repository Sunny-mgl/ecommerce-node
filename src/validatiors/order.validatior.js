const { check } = require("express-validator");
const validationResults = require("../utils/validate");

const createOrderValidatior = [
    check('usersId')
        .exists()
        .withMessage('usersId must exist')
        .notEmpty()
        .withMessage('usersId must bot be empty')
        .isInt()
        .withMessage('usersId must be an integer'),
    check('status')
        .exists()
        .withMessage('status must exist')
        .notEmpty()
        .withMessage('status must bot be empty')
        .isBoolean(),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

const updateOrdersValidatior = [
    check('totalPrice')
        .exists()
        .withMessage('totalPrice must exist')
        .notEmpty()
        .withMessage('totalPrice must bot be empty')
        .isInt()
        .withMessage('totalPrice must be an integer')
        .isFloat(),
    check('usersId')
        .exists()
        .withMessage('usersId must exist')
        .notEmpty()
        .withMessage('usersId must bot be empty')
        .isInt()
        .withMessage('usersId must be an integer'),
    check('status')
        .exists()
        .withMessage('status must exist')
        .notEmpty()
        .withMessage('status must bot be empty')
        .isBoolean(),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

module.exports = {
    createOrderValidatior,
    updateOrdersValidatior
}