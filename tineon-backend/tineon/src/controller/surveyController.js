import surveyModel from "../models/surveyModel.js";
import rolesValidation from '../validation/rolesValidation.js';
import comMsg from '../common/response-message.js'
let surveyModelRef = new surveyModel()
let rolesValidationRef =  new rolesValidation()
import async from 'async';

export default class surveyController{


    insertSurvey(req,res,next){
       async.waterfall([
        function(callback){
            console.log('req==>',req.body.title)
            surveyModelRef.insertSurvey(req).then((result)=>{

                if(result){

                    callback(null,result[0].insertId)
                    // res.status(200).json({
                    //     message:"Survey has been created successfully!",
                    //     status:200,
                    //     result:result
    
                    // })
                }

                }).catch((e)=>{
                res.send(e)
            })
        },
        function(data,callback){
          
           surveyModelRef.insertSurveyAnswers(req,data).then((result)=>{
             // if(result){
                   callback(null,data)
             // }
          
           }).catch((error)=>{
            res.send(error.message)
           })

        },
        function(data,callback){
          
            surveyModelRef.insertSurveyTypes(req,data).then((result)=>{
                callback(null,data)
            //   res.status(200).json({
            //              message:"Survey has been created successfully with result!",
            //              status:200,
            //              result:result
     
            //          })
            }).catch((error)=>{
 
            })
 
         },
        function(data,callback){
            surveyModelRef.insertSurveyUsers(req,data).then((result)=>{
              //  callback(null,data)
              res.status(200).json({
                         message:"Survey has been created successfully with result!",
                         status:200,
                         result:result
     
                     })
            }).catch((error)=>{
                res.send(error.message)
            })

        }

       ])
    }
    

    updateSurvey(req,res,next){
        async.waterfall([
         function(callback){
             console.log('req==>',req.body.title)
             surveyModelRef.updateSurvey(req).then((result)=>{
 
                   callback()
                 }).catch((e)=>{
                 res.send(e)
             })
         },
         function(data,callback){
           
            surveyModelRef.updateSurveyAnswers(req).then((result)=>{
                    //callback(null,data)
                    res.status(200).json({
                                      message:"Survey has been updated successfully with result!",
                                      status:200,
                                      result:result
                  
                                  })
           
            }).catch((error)=>{
             res.send(error.message)
            })
 
         },
        //  function(data,callback){
           
        //      surveyModelRef.insertSurveyTypes(req,data).then((result)=>{
        //          callback(null,data)
        //      }).catch((error)=>{
  
        //      })
  
        //   },
        //  function(data,callback){
        //      surveyModelRef.insertSurveyUsers(req,data).then((result)=>{
        //        //  callback(null,data)
        //        res.status(200).json({
        //                   message:"Survey has been created successfully with result!",
        //                   status:200,
        //                   result:result
      
        //               })
        //      }).catch((error)=>{
        //          res.send(error.message)
        //      })
 
        //  }
 
        ])
     }

 
    
}