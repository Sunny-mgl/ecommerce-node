const { check } = require("express-validator");
const validationResults = require("../utils/validate");


const createCarValidatior = [
    check('idUser')
        .exists()
        .withMessage('idUser must exist')
        .notEmpty()
        .withMessage('idUser must bot be empty')
        .isInt()
        .withMessage('idUser must be an integer'),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

const updateCarvalidatior = [
    check('idUser')
        .exists()
        .withMessage('idUser must exist')
        .notEmpty()
        .withMessage('idUser must bot be empty')
        .isInt()
        .withMessage('idUser must be an integer'),

    (req, res, next) => {
        validationResults(req, res, next)
    }
]

module.exports = {
    createCarValidatior,
    updateCarvalidatior
}