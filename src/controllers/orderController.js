const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel= require("../models/userModel")


const createOrder = async function (req,res){
let header=req.headers["isFreeAppUser"]
if(!header){
    header= req.headers["isFreeAppUser"]
}
if(!header){
    //request cycle terminated
    res.send({msg:"mandatory header is not present"})
}
// =====================user and product validation==============================================================//
let product = await productModel.findById(productId)
if(!product){
    res.send({msg:"product not exist" })
}

// ======================================user validation============================================//
let user = await userModel.findById(userId)
if(!user){
    res.send({msg:"user not exist"})
}
let headerv =false;
if(header=='true'){
    headerv = true
}

let order={
    isFreeAppUser:headerv,
    productId:productId,
    userId:userId
}


// =================================this is scenario 3===========================//

if(headerv){
    order.amount =0
let orderCreated = await orderModel.create(order)
res.send({msg:"order created"})
}else{
    // ================= s1 ============
if(user.balance>=product.price){
//balance sufficient
user.balance =user.balance-product.price
let upadate = await user.save()
order.amount = product.price
let orderCreated = await orderModel.create(order)
res.send({msg:"order created"})
}else{
    res.send({msg:"user has insuficient balance"})
}
}}


module.exports.createOrder=createOrder