const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "martinezgilersunny@gmail.com",
        pass: "prehhjndesxtwhfo"
    },
    tls: {
        rejectUnauthorized: false 
    }
})

module.exports = transporter