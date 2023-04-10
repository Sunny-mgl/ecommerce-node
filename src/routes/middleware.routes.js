const {logError, handlerErrorGeneral, ormError} = require('../middleware/error.handler')

const errorHandler = (app) => {
    app.use(logError)
    app.use(ormError)
    app.use(handlerErrorGeneral)
 
    app.use('*', (req, res) => {
        return res.status(404).send('Rute not found')
    })

}

module.exports = errorHandler