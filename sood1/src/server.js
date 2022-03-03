import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';
// import db from './common/db.js'

// Initializing app
const app =  express()

app.use(cors());
// parse application/x-www-form-urlencoded


// parse application/json
app.use(express.json())

//app.use(bodyParser.urlencoded({ extended: true }))


// Setting up the routers
app.use(router)



// Start the server
app.listen(3006)