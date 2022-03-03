import express from 'express';
import rolesController from '../controller/rolesController.js';
import groupController from '../controller/groupController.js';
import multer from 'multer'
import middleware from '../middleware/middleware.js'

let rolesControllerObj =  new rolesController();
let groupControllerObj =  new groupController();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload_img/')
    },
    filename: function (req, file, cb) {
        const ext = file.mimetype.split("/")[1];
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix+'.'+ext)
    }
  })
  
const upload = multer({ storage: storage })

const rolesRouter =  express.Router()

rolesRouter.post('/insert-role',middleware,rolesControllerObj.insertRoles);
rolesRouter.get('/get-roles',rolesControllerObj.getRoles);
rolesRouter.post('/insert-group',upload.single('file'),groupControllerObj.insertGroup);
rolesRouter.post('/delete-role',middleware,rolesControllerObj.deleteRole);
rolesRouter.post('/update-role',middleware,rolesControllerObj.updateRole);

export default rolesRouter;