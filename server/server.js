import express from 'express'
import routes from './src/routes/routes.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const app = express()

const PORT = process.env.SERVER_PORT || 4000
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/product-app')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT)
})