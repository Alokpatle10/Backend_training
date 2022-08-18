const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {

  author_id:Number,
  author_name:String,
  age:Number,
  address:String,



    // bookName: String, 

    // authorName: String, 
    // tags: [String],
    
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     europePrice: String,
    // },
    // sales: {type: Number, default: 10},
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

}, { timestamps: true });


module.exports = mongoose.model('author', authorSchema) //users



// {    

//   author_id:1,
//   author_name:"Chetan Bhagat",
//   age:25,
//   address:"New delhi"
// } ,
// { 
//   author_id:2,
//   author_name:"J.k Rowling",
//   age:60,
//   address:"Britain"
// } ,
// {    
//   author_id:3,
//   author_name:"Ramanujan",
//   age:100,
//   address:"Tamilnadu"
// }



// Books:
// { 
//   name:"Two states",
//   author_id:1,
//   price:50,
//   ratings:4.5,
// } ,


// { 
//   name:"Five Point Someone",
//   author_id:1,
//   price:50,
//   ratings:4.5,
// } ,
// { 
//   name:"The 3 Mistakes of My Life",
//   author_id:1,
//   price:50,
//   ratings:4.5,
// } ,
// { 
//   name:"One Arranged Murder",
//   author_id:1,
//   price:50,
//   ratings:4.5,
// } ,
// { 
//   name:"Harry Porter",
//   author_id:2,
//   price:50,
//   ratings:4.5,
// } ,
// { 
//   name:"Harry Porter",
//   author_id:2,
//   price:50,
//   ratings:4.5,
// } 
