import express from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel.js';
import comMsg from '../common/response-message.js';
import emoji from 'node-emoji'
let usermodel =  new UserModel();


const middleware = (req,res,next)=>{
    try{
        var token = req.header('Authorization').replace('Bearer ','')
        var decoded = jwt.verify(token,'thisisthesecrectkey')
      
        if(decoded){
            usermodel.getUserByUserId(decoded.id).then((result)=>{
                next();
            }).catch((error)=>{
                res.send(error) 
            })
        
        }
    }
    catch(e){
        res.status(500).json({error:comMsg.authenticationError+''+ emoji.get('no_entry_sign')})
    }
   
}


export default middleware;