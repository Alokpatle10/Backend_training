const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    // name: String,
    // author_id: {
    //     type: ObjectId,
    //     ref: "Author"
    // }, 
    // price: Number,
    // ratings: Number

   
	name:String,
    author_id:{
            type: ObjectId,
            ref:"modauthor"
        },
        price:Number,
        rating:Number,
        publisher_id: {
            type: ObjectId,
            ref:"modpublisher"
        },
		isHardCover:{
            type:Boolean,
            default:false
        }
}, 
{ timestamps: true });


module.exports = mongoose.model('modbook', bookSchema)
