const jwt = require('jsonwebtoken')

const authenticate = (req, res, next ) => {
     const token = req.headers["access-token"]
     if(!token){
        return next({
            status: 401,
            error: "Unauthorized ",
            message: "No token"
        })
     }
     try {
        const decoded = jwt.verify(token, "sunny-M", {
            algorithms: "HS512"
        })
        req.userss = decoded 
        next()
     } catch (error) {
        next(error)
     }
}

module.exports = authenticate

// prehhjndesxtwhfo