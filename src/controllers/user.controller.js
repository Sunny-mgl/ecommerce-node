const UserService = require("../services/user.service")
const transporter = require("../utils/mailer")


const getAllUsers = async (req, res, next) => {
   try {
      const getUsers = await UserService.getAll()
      res.json(getUsers)
   } catch (error) {
      next(error)
   }
}

const createUser = async (req, res, next) => {
   try {
      const newUser = req.body
      const users = await UserService.createss(newUser)
      res.status(201).send()
      await transporter.sendMail({
         from: "martinezgilersunny@gmail.com",
         to: users.email, 
         subject: 'Tu cuenta ha sido creada, verifica tu email',
         html: `
         <p>Hola ${users.username} Bienvenido a ecommerce API</p>
         <p>Verifica tu correo</p>
         `
         ,
      })
   } catch (error) {
        next(error)
      // console.log(error)
   }
}

const updateUser = async (req, res, next) => {
   try {
      const { id } = req.params
      const body = req.body
      await UserService.updates(body, id)
      res.status(204).send()
   } catch (error) {
      next(error)
   }
}

const updateAvatar = async (req, res, next) => {
   try {
      const { id } = req.params
      const updateBodyAv = req.body
      await UserService.updatesAvatar(updateBodyAv, id)
      res.status(204).send()
   } catch (error) {
      next(error)
      // console.log(error)
   }
}

module.exports = {
   getAllUsers,
   createUser,
   updateUser,
   updateAvatar
}