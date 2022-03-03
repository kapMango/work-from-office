import express from 'express';
import teamsController from '../controller/teamsController.js';
import middleware from '../middleware/middleware.js'

let teamsControllerObj =  new teamsController();
const teamsRouter =  express.Router()

teamsRouter.post('/insert-team',middleware,teamsControllerObj.insertTeam);
teamsRouter.get('/get-teams',teamsControllerObj.getTeams);
teamsRouter.post('/delete-team',middleware,teamsControllerObj.deleteTeam);
teamsRouter.post('/update-team',middleware,teamsControllerObj.updateTeam);

export default teamsRouter;