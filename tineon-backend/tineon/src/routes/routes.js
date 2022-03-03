import express from 'express';
import userController from '../controller/user.js';

let userCont =  new userController();
const router =  express.Router()

router.post('/signup',userCont.insertUser);
router.post('/login',userCont.loginUser);


export default router