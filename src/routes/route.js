const express = require('express');
const router = express.Router();
const product=require("../controllers/productController")
const userController=require("../controllers/userController")
const orderController=require("../controllers/orderController")
const middleware= require("../middlewares/commonMiddlewares")

router.post("/Product",product.createProduct)
router.post("/createUser",middleware.statusCheck, userController.createUser)
router.post("/createOrder",middleware.statusCheck, orderController.createOrder)


module.exports = router;