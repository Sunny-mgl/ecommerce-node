const userRoutes = require('./user.routes')
const productsRoutes = require('./products.routes')
const authRoutes = require('./auth.routes')
const orderRoutes = require('./orders.routes')
const carRoutes = require('./car.routes')
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')

const ApiRoutes = (app) => {
   app.use('/api/v1', userRoutes)
   app.use('/api/v1', productsRoutes)
   app.use('/api/v1/auth', authRoutes)
   app.use('/api/v1', orderRoutes)
   app.use('/api/v1', carRoutes)
   app.use('/api/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}

module.exports = ApiRoutes