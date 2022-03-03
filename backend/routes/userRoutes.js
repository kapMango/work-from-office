const express = require("express");
const {CreateUser, GetUser} = require("../controllers/userControllers")

const router = express.Router();

router.route('/createUser/new').post(CreateUser)
router.route('/User').get(GetUser)


module.exports=router;