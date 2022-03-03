import express from 'express';

import groupController from '../controller/groupController.js';
import multer from 'multer'
import middleware from '../middleware/middleware.js'

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

const groupRouter =  express.Router()

groupRouter.post('/insert-group',upload.single('file'),groupControllerObj.insertGroup);
//groupRouter.get('/get-roles',rolesControllerObj.getRoles);
groupRouter.post('/delete-group',groupControllerObj.deleteGroup);
groupRouter.post('/update-group',groupControllerObj.updateGroup);


export default groupRouter;