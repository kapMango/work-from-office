import groupModel from '../models/groupModel.js'
import comMsg from '../common/response-message.js'
let groupModelRef = new groupModel()

export default class groupController{


    insertGroup(req,res,next){
        groupModelRef.insertGroup(req).then((result)=>{
            if(result[0].insertId){
                groupModelRef.insertGroupUsers(req,res,result[0].insertId).then((result)=>{
                    res.status(200).json({
                        message:"Group has been created successfully!",
                        status:200

                    })
                }).catch((error)=>{

                })
            }
        }).catch((error)=>{
            res.send(error.message,500)
        })
    }

    deleteGroup(req,res,next){
        groupModelRef.deleteGroup(req).then((result)=>{
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

    updateGroup(req,res,next){
        rolesModelRef.updateGroup(req).then((result)=>{
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