import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import rolesRouter from './routes/roles-routes.js';
import teamsRouter from './routes/teams-routes.js';
import newsRouter from './routes/news-routes.js';
import bodyParser from 'body-parser';
import groupRouter from './routes/group-routes.js';
import surveyRouter from './routes/survey-routes.js';


// Initializing app
const app =  express()

app.use(cors());
// parse application/x-www-form-urlencoded


// parse application/json
app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: true }))


// Setting up the routers
app.use(router)
app.use(rolesRouter)
app.use(teamsRouter)
app.use(newsRouter)
app.use(groupRouter)
app.use(surveyRouter)



// Start the server
app.listen(3003)