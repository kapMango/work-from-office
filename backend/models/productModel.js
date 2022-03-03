const mongoose = require('mongoose')
var validator = require("validator");

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    work_order:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    workers:{
        type:String,
        required:true
    },
    start_date:{
        type:String,
        required:true
    },
    end_date:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    
})

module.exports= mongoose.model("work_orders",productSchema)