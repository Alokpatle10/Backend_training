const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const moment=require('moment')
const time=moment()
app.use(
    function(req,res,next){
        console.log("this is Global")
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
        console.log(req.ip);
        console.log(req.Url)
        next()
    }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://alok10:vralok10@cluster0.rntxqd0.mongodb.net/vaishu-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);

app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        res.send({msg:"done"})
  }
  );

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
