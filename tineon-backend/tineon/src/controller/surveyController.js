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
          
           console.log('data',data)

           surveyModelRef.insertSurveyAnswers(req,data).then((result)=>{

           }).catch((error)=>{

           })

        },
        function(){

        }

       ])
    }

 
    
}