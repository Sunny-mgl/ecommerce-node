const {
    ValidationError,
    DatabaseError,
    BaseError,
    ConnectionError,
    ConnectionAcquireTimeoutError,
    ConnectionRefusedError,
    ConnectionTimedOutError,
    InvalidConnectionError
  } = require('sequelize')
 
  const logError = (error, req, res, next) => {
     console.log(error)
     next(error)
  }
 
 const handlerErrorGeneral = (error, req, res, next) => {
     let {status} = error
     return res.status(status || 500).json({
         message: error.message,
         errorName: error.errorName
     })
 }
 
 const ormError = (error, req, res, next) => {
     if(
         error instanceof ConnectionError ||
         error instanceof ConnectionAcquireTimeoutError ||
         error instanceof ConnectionRefusedError ||
         error instanceof ConnectionTimedOutError ||
         error instanceof InvalidConnectionError
 
     ){
         return res.status(409).json({
             name: error.name,
             message: 'Database connection error'
         })
     }
     if (
         error instanceof ValidationError) {
         return res.status(409).json({
             name: error.name,
             message: error.message,
             errors: error.errors,
             params: error['parametre']
         })
     }
 
     if (error instanceof DatabaseError) {
         return res.status(409).json({
             name: error.name,
             message: error.message,
             errors: error.errors
         })
     }
 
     if (error instanceof ConnectionError) {
         return res.status(409).json({
             name: error.name,
             message: 'Connection error'
         
         })
     }
     next(error)
 }
 
  module.exports= {
     logError,
     handlerErrorGeneral,
     ormError
  }