
const {orders} = require('../models')
class OrderService {
   static async delete(id){
     try {
        const dlete = await orders.destroy({
            where: {id}
        })
        return dlete
     } catch (error) {
        throw error
     }
   }
}

module.exports= OrderService