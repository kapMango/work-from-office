import teamsModel from "../models/teamsModel.js";
import teamsValidation from '../validation/teamsValidation.js';
import comMsg from '../common/response-message.js'
let teamsModelRef = new teamsModel()
let teamsValidationRef =  new teamsValidation()

export default class teamsController{


    insertTeam(req,res,next){
        let errors = teamsValidationRef.teamValidate(req.body);

        if(errors.length){
            res.status(417).json({errors});
        }else{
            teamsModelRef.insertTeam(req).then((result)=>{
                if(result){
                    res.status(200).json({
                        message:comMsg.teamInertSuccess,
                        status:200

                    })
                }
            }).catch((error)=>{
                res.send(error,500)
            })
        }
    }

    getTeams(req,res,next){
        teamsModelRef.getTeamsList(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.teamsListSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.teamsListError,
                error:error
            })
        })
    }

    deleteTeam(req,res,next){
        teamsModelRef.deleteTeam(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.teamDeleteSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.teamDeleteError,
                error:error
            })
        })
    }

    updateTeam(req,res,next){
        teamsModelRef.updateTeam(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.teamUpdateSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.teamUpdateError,
                error:error
            })
        })
    }
    
}