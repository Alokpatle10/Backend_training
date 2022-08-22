const authorModel = require("../models/authorModel")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    // let authors = await AuthorModel.updateMany({mobileName:vivo},{$set:{price:10}},{upsert:true})
  let authors = await AuthorModel.findOneAndUpdate( {_id : requestBlogId}, {isPublished : true}, {new : true, upsert : true})

     
     
    console.log(typeof authors)
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData