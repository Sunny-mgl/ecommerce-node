const AuthServices = require("../services/auth.service")
const UserService = require("../services/user.service")
const bcrypt = require('bcrypt')

const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body
        const user = await UserService.getUser(email)
        if (!user) {
            return next({
                status: 400,
                message: "Invalid Email, try again",
                error: "User not found"
            })
        }
        //si existe el user ahora nos toca verificar la contraseña
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid) {
            return next({
                status: 400,
                message: "the password is not correct, try again",
                error: "Invalid password"
            })
        }
        const { 
            id,
            username, 
            avatar
        } = user 

        const token = AuthServices.genToken({ id, username, avatar})

        res.json({
            id, username, email, avatar, token
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    userLogin
}