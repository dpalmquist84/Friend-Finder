<<<<<<< HEAD
=======
<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var friends = [{
  "name": "David",
  "photo": "",
  "scores": [
    5,
    4,
    3,
    2,
    1,
    5,
    4,
    3,
    2,
    1
  ]
}];

app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
=======
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7
var friends = require("../data/friends")


module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friends)
    console.log(`friends2: ${friends}`);
  });
 

  app.post("/api/friends", function(req, res) {
    console.log(`friends4 : ${req.body}`);
    console.log(req.body);
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }
    else {
      friends.push(req.body);
      res.json(false);
    }
  });

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7
  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
 
    console.log(`cleared: ${friends}`);
  });
};



  
  
  



<<<<<<< HEAD
=======
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
=======
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
>>>>>>> parent of 8b37625... changes to the routes
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7
