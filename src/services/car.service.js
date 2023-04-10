const {cars, products, users,  productsInCar} = require('../models')

class CarService {
static async getByid(idUsePro){
    try {
        const getP = await cars.findByPk(idUsePro, {
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: [
                {
                    model: users,
                    attributes: ["username"],
                    include: {
                        model: products,
                        attributes: ["name", "description",]
                    }
                },
                {
                    model: productsInCar,
                    attributes: ["quantity", "price"]
                }
            ]
        })
        //no se pude hacer include primero a products porque lanza error => ( products is not associ ) ya que product no esta relacionada con cars, pero users si esta con cars y por lo tanto hacemos el include de products a users
      return getP
    } catch (error) {
    //    throw error 
    console.log(error)
    }
}
}
module.exports = CarService