const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

router.get('/GET/movies', function(req, res){
    console.log(["thor","iron-man"])
    res.send(["Rang de basanti" , "The shining", "lord of the rings", "Batman begins"])

})

router.get('/movies/:indexNumber' , function (req,res){
    let movieIndex = ["Thor" , "Iron-Man" , "Avengers" , "Black-panther"]
    if(req.params.indexNumber > movieIndex.length)
    {
        res.send(movieIndex[req.params.indexNumber])
    }
    else{
        res.send("enter invalid indexNumber")
    }
});

router.get('/films', function (req, res) {

    const filmNames=[{id:1, name:"Don"},{id:2, name:"RaOne"},{id:3, name:"Swades"},{id:4, name:"Kal Ho Naa Ho"}]

   
    res.send(filmNames)
});

router.get('/films/:filmId', function (req, res) {

    const id= req.params.filmId
    const filmNames=[{id:1, name:"Don"},{id:2, name:"RaOne"},{id:3, name:"Swades"},{id:4, name:"Kal Ho Naa Ho"}]
    let arr=[]
    filmNames.forEach(x => {
        if (id == x.id){
            arr=x;
        }        
     });
     if (arr.length !== 0){
         res.send(arr)
     } else {
         res.send('No movie exists with this id')
     }
});


router.get('/sol1', function (req, res) {

    let arr=[1,2,3,4,5,6,7,8,10]
    let sumNatural = (arr[arr.length-1]*(arr[arr.length-1]+1))/2;
    let sumArray=0;
    arr.forEach(x=> sumArray=sumArray+x);
    let missingNumber= sumNatural-sumArray;

    res.send("The missing number is:- "+missingNumber)

    
});

router.get('/sol2', function (req, res) {

    let arr=[33,34,36,37,38]
    let sumNatural = ((arr.length+1)*(arr[0]+arr[arr.length-1]))/2;
    let sumArray=0;
    arr.forEach(x=> sumArray=sumArray+x);
    let missingNumber= sumNatural-sumArray;

    res.send("The missing number is:- "+missingNumber)

    
});


module.exports = router;