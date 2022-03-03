import groupModel from '../models/groupModel.js'

let groupModelRef = new groupModel()

export default class groupController{


    insertGroup(req,res,next){
        groupModelRef.insertGroup(req).then((result)=>{
            if(rows[0].insertId){
                groupModelRef.insertGroupUsers(req,res).then((result)=>{
                    res.status(200).json({
                        message:"Group has been created successfully!",
                        status:200

                    })
                }).catch((error)=>{

                })
            }
        }).catch((error)=>{
            res.send(error,500)
        })
    }
}