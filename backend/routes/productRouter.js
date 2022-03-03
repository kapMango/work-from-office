
const express = require("express");
const { getAllproduct, CreateProduct } = require("../controllers/productControllers");
const router =express.Router()


router.post('/insert-work-order',CreateProduct);
router.get('/get-work-orders',getAllproduct);




module.exports=router;