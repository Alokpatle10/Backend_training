// const { model } = require("mongoose")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createbook=async function(req,res){
let book=req.body
let savebook=await bookModel.create(book)
 res.send({msg:savebook})
}

// ===========================================================================================

const booksByChetan=async function(req,res){
    let author = await authorModel.find({author_name:"Chetan Bhagat"});
    let ID =await bookModel.find({author_id:{$eq:author[0].author_id}});
    res.send({msg:ID})

}
// ================================================================================================

const update=async function(req,res){
    let newprice=await bookModel.findOneAndUpdate({name:"Two states"} ,{$set : {price:100} },{new:true});
let updateprice=newprice.price;
let updateAuthor=await authorModel.find({author_id:{$eq:newprice.author_id}}).select({author_name:1,_id:0});
res.send({updateprice,updateAuthor})
}

// ===========================================================================

const bookRange =async function(req,res){
    const range =await bookModel.find({price:{$gte:50,$lte:100}});
    const b= range.map(x=>x.author_id);
    const newRange= await authorModel.find({author_id:b}).select({author_name:1,_id:0});
    res.send (newRange);
}

module.exports.bookRange=bookRange;
module.exports.update=update;
module.exports.booksByChetan=booksByChetan;
module.exports.createbook=createbook;
