<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
<<<<<<< HEAD
const server = require("../../server.js")
const app = require("../../server.js")

=======
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
=======
const app = express();
>>>>>>> parent of 8b37625... changes to the routes



<<<<<<< HEAD
<<<<<<< HEAD

  
function post(){

app.post("/api/new", function(req, res) {
    console.log(req.body);
    var newFriend = req.body;
    newFriend.routeName - newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log(newFriend);

    friends.push(newFriend)

    res.json(newFriend)
});
}

module.exports = post();
=======
 var friendsArray = [];


module.exports = friendsArray;
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
=======
>>>>>>> parent of 8b37625... changes to the routes
