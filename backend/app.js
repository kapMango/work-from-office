const express = require('express')

const app = express();

app.use(express.json())

const product = require('./routes/productRouter')
const user = require('./routes/userRoutes')

app.use('/api/',product),
app.use('/api/',user)

module.exports=app;