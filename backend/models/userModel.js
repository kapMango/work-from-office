const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone_no:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("user",UserSchema)