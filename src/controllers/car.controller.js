const {cars, productsInCar} = require('../models')
const CarService = require('../services/car.service')

const  getUserProducts = async (req,res, next) => {
    try {
        const {idUsePro} = req.params
        const getUserP = await CarService.getByid(idUsePro)
        res.json(getUserP)
    } catch (error) {
        next(error)
    }
}

const createCar = async(req, res, next) => {
    try {
        const carBody = req.body
        await cars.create(carBody)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}


const addToCar = async (req, res, next) => {
    try {
       const {carId, productsId,  quantity, price, status} = req.body;
       await productsInCar.create({carId, productsId,  quantity, price, status});
       const totalPrice = price * quantity;
       await cars.increment({totalPrice}, {where: {id: carId}});
       res.json({
        message: "The car was successfully added"
       });
    } catch (error) {
        next(error);
        //  console.log(error)
    }
    }

module.exports = {
    getUserProducts,
    createCar,
    addToCar
}