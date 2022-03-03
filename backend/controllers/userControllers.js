const res = require('express/lib/response');

const User =require("../models/userModel")


// exports.CreateUser= async (req, res) => {
//     try {
//      await User.create(req.body);
//      res.json({ done: 1 });
//     } catch (err) {
//      res.json({ error: err.message || err.toString() });
//     }
//    }
exports.CreateUser = (req,res) =>{
 const users = new User(req.body)

 users.save().then(()=>{
  res.send(users)
 }).catch((err)=>{
    res.send(err)
 })
}
exports.GetUser = (req,res) =>{   
    User.find({}).then((user)=>{
     res.send(user)
    }).catch((err)=>{
       res.send(err)
    })
   }