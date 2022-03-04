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
                res.status(200).json({
                    message:"Survey has been created successfully!",
                    status:200

                })
            }).catch((e)=>{
                res.send(e)
            })
        },
        function(callback){
          


        },
        function(){

        }

       ])
    }

 
    
}