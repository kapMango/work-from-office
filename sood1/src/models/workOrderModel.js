import mongoose from 'mongoose';

export default class workOrderModel{

    connection(req){

        mongoose.connect('mongodb://127.0.0.1:27017/sood_db',{
            useNewUrlParser:true,
            useUnifiedTopology:true
       
        })

        const work_order = mongoose.models.work_orders ||  mongoose.model('work_orders',{
            name:{
                type:String
            },
            work_order:{
                type:String
            },
            company:{
                type:String
            },
            workers:{
                type:String
            },
            start_date:{
                type:String
            },
            end_date:{
                type:String
            },
            status:{
                type:String
            },
            

        })
    
        return work_order;
    }
  
}