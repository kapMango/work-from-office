
const mongooes = require('mongoose')
const { TextEncoder, TextDecoder } = require("util");

const DatabaseConn = () =>{

    mongooes.connect("mongodb://127.0.0.1:27017/sood_db",{useNewUrlParser:true,useUnifiedTopology:true}).then((data)=>(
       console.log("connected")
       )).catch((err)=>console.log("err",err))
       

}
module.exports = DatabaseConn;

// var mongoose = require('mongoose');

// var url = "mongodb://127.0.0.1:27017/nodeTask";
// try {
//     var db = mongoose.connect(url,()=>{
//         console.log("data base connect successfully......")
//     })
// } catch (error) {
//     console.log("connection failed..")
// }

// module.exports = db;