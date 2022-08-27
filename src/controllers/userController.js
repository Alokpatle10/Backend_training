const userModel = require("../models/userModel")
// const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    req.body["isFreeAppUser"]= req.isFreeAppUser
    let data= req.body;
    let savedData= await userModel.create(data)
    res.send({msg:savedData})    
}


module.exports.createUser=createUser;