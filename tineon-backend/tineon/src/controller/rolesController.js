import rolesModel from "../models/rolesModel.js";
import rolesValidation from '../validation/rolesValidation.js';
import comMsg from '../common/response-message.js'
let rolesModelRef = new rolesModel()
let rolesValidationRef =  new rolesValidation()

export default class rolesController{


    insertRoles(req,res,next){
        let errors = rolesValidationRef.roleValidate(req.body);

        if(errors.length){
            res.status(417).json({errors});
        }else{
            rolesModelRef.insertRoles(req).then((result)=>{
                if(result){
                    res.status(200).json({
                        message:comMsg.roleInertSuccess,
                        status:200

                    })
                }
            }).catch((error)=>{
                res.send(error,500)
            })
        }
    }

    getRoles(req,res,next){

        rolesModelRef.getRolesList(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.rolesListSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.rolesListError,
                error:error
            })
        })
    }

    deleteRole(req,res,next){
        rolesModelRef.deleteRole(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.rolesDeleteSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.rolesDeleteError,
                error:error
            })
        })
    }

    updateRole(req,res,next){
        rolesModelRef.updateRole(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.rolesUpdateSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.rolesUpdateError,
                error:error
            })
        })
    }
    
}