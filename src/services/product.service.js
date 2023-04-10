const { products } = require('../models')

class ProductService {

    static async getAll(){
        try {
            const getP = await products.findAll()
            return getP
        } catch (error) {
            throw error
        }
    }

//    static async getAll(){
//     try {
//         const result = await products.findAll()
//         return result
//     } catch (error) {
//         throw error
//     }
//    }

    static async creates(body) {
        try {
            const createP = await products.create(body)
            return createP
        } catch (error) {
            throw error
        }
    }

    static async updatess(updateDescription, id){
        try {
            const updateDescri = await products.update(updateDescription, {
                where: {id}
            })
            return updateDescri
        } catch (error) {
            throw error
            // console.log(error)
        }
    }
}

module.exports = ProductService