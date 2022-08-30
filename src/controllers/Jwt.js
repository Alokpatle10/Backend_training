const jwt = require("jsonwebtoken");
const { get } = require("mongoose");
const userModel = require("../models/userModel");

// ===============================================createUser=============================================================


const createUser= async function(req,res){
    let user = req.body
    let userData = await userModel.create(user)
    res.send({msg:userData})
}


// =================================================loginUser===================================================================


const loginUser =async function (req,res){
let userName = req.body.emailId
let password=req.body.password
let user=await userModel.findOne({emailId:userName , password:password})
if(!user)
return res.send({status:false , msg:"userName Or Password is incorrect"})

// if userid and password is correct then genarate the token

let token= jwt.sign({
    userId:user._id.toString(),
    batch:"Plutonium"
}, 'functionup-plutonium');
res.setHeader("x-auth-token", token);
res.send({status:true, msg:token});
}

// ===================================================validation=============================================================================

const getUserData = async function (req, res) {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
  };
  

// =====================================================update=========================================================================================



const updateUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.send({ status: true, data: updatedUser });
};

  
    
  
// ============================================================Delete=================================================================

const deleteUser = async function (req, res) {
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  );
  res.send({ status: updatedUser, data: updatedUser });
};


//   ====================================================================================================================================
  
module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser
