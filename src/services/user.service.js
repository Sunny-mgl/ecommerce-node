const {users} = require('../models')
const bcrypt = require('bcrypt')

class UserService {
    
    static async getAll() {
        try {
            const result = await users.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    //login
    static async getUser(email) {
        try {
           const getUse = await users.findOne({
            where: {email}
           }) 
           return getUse
        } catch (error) {
            throw error
        }
    }

    static async createss(newUser){
        try {
            const salt = await bcrypt.genSalt(10)
            const passwordHash = await bcrypt.hash(newUser.password, salt)
            newUser.password = passwordHash
            const result = await users.create(newUser)
            return result
        } catch (error) {
            throw error
        // console.log(error)
        }
    }

    static async updates(body, id ){
        try {
            const result = await users.update(body,{
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }

    static async updatesAvatar(updateBodyAv, id) {
        try {
            const result = await users.update(updateBodyAv, {
                where: {id}
            })
            return result
        } catch (error) {
            throw error
        }
    }
    
}

module.exports = UserService