const express = require('express');
const router = express.Router();
const product=require("../controllers/productController")
const userController=require("../controllers/userController")
const middleware= require("../middlewares/commonMiddlewares")

router.post("/Product",product.createProduct)
router.post("/createUser",middleware.isfree, userController.createUser)


module.exports = router;