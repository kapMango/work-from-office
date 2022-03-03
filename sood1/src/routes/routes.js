import express from 'express';
import userController from '../controller/user.js';

let userCont =  new userController();
const router =  express.Router()

// router.post('/signup',userCont.insertUser);
// router.post('/login',userCont.loginUser);


router.post('/insert-work-order',userCont.insertData);
router.get('/get-work-orders',userCont.getData);

export default router