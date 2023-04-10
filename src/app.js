const express = require ('express')
const ApiRoutes = require('./routes')
const errorHandler = require('./routes/middleware.routes')

const PORT = 8000

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

 ApiRoutes(app)

errorHandler(app)
  

app.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo ${PORT}`)
})