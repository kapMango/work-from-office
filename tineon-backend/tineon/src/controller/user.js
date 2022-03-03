import UserModel from '../models/userModel.js';
import bcrypt from 'bcrypt';
import userValidation from '../validation/userValidation.js';

import async from 'async';
import jwt from 'jsonwebtoken';
import resMsg from '../common/response-message.js'
let userValidationObj = new userValidation()

let usermodel = new UserModel()

export default class userController{

   insertUser(req,res,next) {
    let errors = userValidationObj.userValidate(req.body)
        if(errors.length){
            res.status(417).json({errors});
        }
        else{ 
            async.waterfall([
                function(callback){
                    usermodel.checkEmailExists(req).then((result)=>{
                        if (result) {
                          
                            res.status(200).json({error:resMsg.emailExist});
                        }
                        else {
                            callback();
                        }
                    }).catch((error)=>{
                        res.status(200).json(error)
                    })
                },
                function(callback){
                    bcrypt.hash(req.body.password,8,(err,hash)=>{
                        if(err){
                            return res.send({
                                error:resMsg.hashError
                            })
                        }
                        req.body.password = hash
                        usermodel.insertUser(req).then((rows,result)=>{
                                
                                if(rows[0].insertId){
                                    usermodel.insertUserDetails(req,rows[0].insertId).then(()=>{
                                          res.send({
                                            status  :200,
                                            message : resMsg.userInserted,
                                            data    : rows[0]
                                            })
                                    }).catch((err)=>{
                                        res.send(err)
                                    })
                                }else{
                                    res.send({
                                        status  :412,
                                        message :resMsg.somethingwentwrong,
                                        data    : rows[0]
                                    })
                                }
                              
                        
                        }).catch((error)=>{
                            res.send(error)
                        })
                                    
                    })
                }
            ])
        }   
   }

loginUser(req,res,next){
    usermodel.login(req).then((data) => {
        if (data[0]) {
          console.log(data[0].password)
            bcrypt.compare(req.body.password, data[0].password).then((passMatch) => {
                if (!passMatch) {
                    res.status(200).json({'response':'password not matched'})
                } else{
                    var token = jwt.sign({id:data[0].id},'thisisthesecrectkey')
                    console.log('token',token)
                    delete data[0].password
                    res.status(200).json({
                        data: data[0],
                        status:'success',
                        token:token,
                        message:"login successfully!"

                    })
                }
            }).catch((error) => {
               
                res.status(500).json(error);
                return;
            })
        }else{
            res.status(500).json({'response':'Invalid username/ password'});
     
        }
    }).catch((error) => {
     
        res.status(500).json({'response':'false'});
        return;
    })
   }



}