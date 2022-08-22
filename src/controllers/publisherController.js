// const authorModel = require("../models/authorModel")
// const bookModel= require("../models/bookModel")
const publisherModel= require("../models/publisherModel")

const createpub= async function (req, res) {
    let pub = req.body
    let pubCreated = await publisherModel.create(pub)
    res.send({data: pubCreated})
}

// const getpub= async function (req, res) {
//     let pub = await publisherModel.find()
//     res.send({data: pub})
// }

module.exports.createpub=createpub;
// module.exports.getpub=getpub;