const {orders, productsInOders } = require('../models')
const OrderService = require('../services/orders.service')


const getAllOrders = async (req, res, next) => {
    try {
        const getOrder = await orders.findAll()
        res.json(getOrder)
    } catch (error) {
        next(error)
    }
}

const createOrder = async (req, res, next) => {
    try {
        const orderBody = req.body
        await orders.create(orderBody)
        res.status(201).send()
    } catch (error) {
        next(error)
    }
}

const addProduct = async (req, res, next) => {
try {
   const {orderId, productId,  quantity, price, status} = req.body;
   await productsInOders.create({orderId, productId,  quantity, price, status});
   const total = price * quantity;
   await orders.increment({total}, {where: {id: orderId}});
   res.json({
    message: "The product was successfully added"
   });
} catch (error) {
    next(error);
    // console.log(error)
}
}

const deleteOrder = async (req, res, next) => {
    try {

         const {id} = req.params
        await OrderService.delete(id)
        res.status(201).send()
    } catch (error) {
        next(error)
        // console.log(error)
    }
}

module.exports = {
    getAllOrders,
    createOrder,
    addProduct,
    deleteOrder
}