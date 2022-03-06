import express from 'express';
import surveyController from '../controller/surveyController.js';
import groupController from '../controller/groupController.js';
import multer from 'multer'
import middleware from '../middleware/middleware.js'

const upload = multer()

let surveyControllerObj =  new surveyController();

const surveyRouter =  express.Router()

surveyRouter.post('/insert-survey',upload.none(),surveyControllerObj.insertSurvey);
surveyRouter.post('/update-survey',upload.none(),surveyControllerObj.updateSurvey);


export default surveyRouter;