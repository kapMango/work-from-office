import groupModel from '../models/groupModel.js'
import comMsg from '../common/response-message.js'
let groupModelRef = new groupModel()

export default class groupController{


    insertGroup(req,res,next){
        groupModelRef.insertGroup(req).then((result)=>{
            if(result[0].insertId){
                groupModelRef.insertGroupUsers(req,res,result[0].insertId).then((result)=>{
                    res.status(200).json({
                        message:comMsg.groupInertSuccess,
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
                messsage:comMsg.groupsDeleteSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.groupsDeleteError,
                error:error
            })
        })
    }

    updateGroup(req,res,next){
        groupModelRef.updateGroup(req).then((result)=>{

                
            groupModelRef.updateGroupUsers(req).then((result)=>{
                res.send({success:'true'},200)
            }).catch(()=>{

            })            
                // res.send({
                //     status:200,
                //     messsage:comMsg.groupsUpdateSuccess,
                //     data:result
                // })
           
            
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.groupsUpdateError,
                error:error.message
            })
        })
    }

    getGroups(req,res,next){
        groupModelRef.getGroupsList(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.groupsListSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.groupsListError,
                error:error
            })
        })
    }
}