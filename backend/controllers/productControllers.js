
const res = require('express/lib/response');
const product = require('../models/productModel')

exports.getAllproduct = async (req, res) => {
    const book =  await product.find();
    try {
        const book=  await product.find();
        res.status(200).json({
            message:"Work order has been fetched successfully!",
            status:200,
            data:book
          
        })
    } catch (err) {
     res.json({ error: err.message || err.toString() });
    }
   }



// exports.CreateProduct= async (req, res) => {
//     try {
//      await product.create(req.body);
//      res.json({ done: 1 });
//     } catch (err) {
//      res.json({ error: err.message || err.toString() });
//     }
//    }
exports.CreateProduct=(req,res)=>{
    const products = new product(req.body)

    products.save().then(()=>{
        res.status(200).json({
            message:"Work order has been created successfully!",
            status:200
          
        })
    }).catch((err)=>{
        res.send(err)

    })
}
  


