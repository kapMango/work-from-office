import workOrderModel from '../models/workOrderModel.js';

let workOrderModelRef = new workOrderModel()

export default class userController{

    // insertData(req,res,next){
    //   try{
    //     workOrderModelRef.connection(req).then((result)=>{
    //         console.log('result,',result)
    //         if(result){
    //             res.status(200).json({
    //                 message:"Work order has been created successfully!",
    //                 status:200
    
    //             })
    //         }
           
    //     }).catch((error)=>{
    //         res.status(500).send({"error":error.message})
    //     })
    //   }catch(e){
    //     res.status(500).send({"error123":e})

    //   }
        
    // }

    insertData(req,res,next){
      try{
        const instance = workOrderModelRef.connection()
        const data_to_send = new instance(req.body)
        data_to_send.save().then(()=>{
          res.status(200).json({
              message:"Work order has been created successfully!",
              status:200
            
          })
        }).catch(()=>{
          console.log('error saving')
        })
        
      }catch(e){
        res.status(500).send({"error123":e})

      }
        
    }


    getData(req,res,next){
      const instance = workOrderModelRef.connection()
      instance.find({}).then((result)=>{
        res.status(200).json({
          message:"Work order has been fetched successfully!",
          status:200,
          data:result
        
      })
      }).catch(()=>{

      })
    }



}