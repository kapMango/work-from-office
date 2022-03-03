import express from 'express';
import newsController from '../controller/newsController.js';
import middleware from '../middleware/middleware.js'

let newsControllerObj =  new newsController();
const newsRouter =  express.Router()

newsRouter.post('/insert-news',middleware,newsControllerObj.insertNews);
newsRouter.get('/get-news',middleware,newsControllerObj.getNews);
newsRouter.post('/delete-news',middleware,newsControllerObj.deleteNews);
newsRouter.post('/update-news',middleware,newsControllerObj.updateNews);

export default newsRouter;