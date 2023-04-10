const jwt = require('jsonwebtoken')


class AuthServices {
    static  genToken(payload){
      try {
        const token = jwt.sign(payload, "sunny-M", {
            algorithm: "HS512",
            expiresIn: "4d"
        } )
        return token
      } catch (error) {
         throw error
      }
    }
}

module.exports= AuthServices