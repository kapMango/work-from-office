import express from 'express';
import rolesController from '../controller/rolesController.js';
import groupController from '../controller/groupController.js';
import multer from 'multer'
import middleware from '../middleware/middleware.js'

let rolesControllerObj =  new rolesController();




const rolesRouter =  express.Router()

rolesRouter.post('/insert-role',middleware,rolesControllerObj.insertRoles);
rolesRouter.get('/get-roles',rolesControllerObj.getRoles);
rolesRouter.post('/delete-role',middleware,rolesControllerObj.deleteRole);
rolesRouter.post('/update-role',middleware,rolesControllerObj.updateRole);

export default rolesRouter;