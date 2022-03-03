import newsModel from "../models/teamsModel.js";
import newsValidation from '../validation/newsValidation.js';
import comMsg from '../common/response-message.js'
let newsModelRef = new newsModel()
let newsValidationRef =  new newsValidation()

export default class newsController{


    insertNews(req,res,next){
        let errors = newsValidation.newsValidate(req.body);

        if(errors.length){
            res.status(417).json({errors});
        }else{
            newsModelRef.insertNews(req).then((result)=>{
                if(result){
                    res.status(200).json({
                        message:comMsg.newsInertSuccess,
                        status:200

                    })
                }
            }).catch((error)=>{
                res.send(error,500)
            })
        }
    }

    getNews(req,res,next){
        newsModelRef.getNewsList(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.newsListSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.newsListError,
                error:error
            })
        })
    }

    deleteNews(req,res,next){
        newsModelRef.deleteNews(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.newsDeleteSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.newsDeleteError,
                error:error
            })
        })
    }

    updateNews(req,res,next){
        newsModelRef.updateNews(req).then((result)=>{
            res.send({
                status:200,
                messsage:comMsg.newsUpdateSuccess,
                data:result
            })
        }).catch((error)=>{
            res.send({
                status:200,
                messsage:comMsg.newsUpdateError,
                error:error
            })
        })
    }
    
}