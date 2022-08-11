





    
    
    // Write a POST /players api that creates a new player ( i.e. that saves a player’s details and doesn’t allow saving the data of a player with a name that already exists in the data)
    
    // NOTE: you must create the players array outside( on the top ) of the api( so that data is maintained across api hits)
    
    
    
    // —----------------
    
    
    // The file inside routes would look like this:
    
    const express = require('express');
    const router = express.Router();
    
    let players =
       [
           {
               "name": "manish",
               "dob": "1/1/1995",
               "gender": "male",
               "city": "jalandhar",
               "sports": [
                   "swimming"
               ]
           },
           {
               "name": "gopal",
               "dob": "1/09/1995",
               "gender": "male",
               "city": "delhi",
               "sports": [
                   "soccer"
               ],
           },
           {
               "name": "lokesh",
               "dob": "1/1/1990",
               "gender": "male",
               "city": "mumbai",
               "sports": [
                   "soccer"
               ],
           },
       ]
    
       


router.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});




module.exports = router;
// adding this comment for no reason