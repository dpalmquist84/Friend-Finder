<<<<<<< HEAD
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();


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
var friends = require("../data/friends")


module.exports = function(app){
  app.get("/api/friends", function(req, res) {
    res.json(friends)
    console.log(`friends2: ${friends}`);
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
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
  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
 
    console.log(`cleared: ${friends}`);
  });
};



  
  
  // app.post("/api/friends", function(req, res) {
  //   console.log(req.body)
  //   data.push(req.body)
  //   res.json(data)
    // var serveyKeys = Object.keys(req.body)
    //   var score = 0
    //    serveyKeys.forEach((key)=>{ score += parseInt(req.body[key]) }) 
       
         
    //      console.log(score)
    // console.log("POST COMES HERE ")
    // console.log(req.body)
    // res.json(friends);
  // });

//   app.get("/api/Data", function(req, res) {
//     // here I can post data og the new aplicant;
//  var friend = {
//   "name": "David",
//   "photo": "",
//   "scores": [
//     5,
//     4,
//     3,
//     2,
//     1,
//     5,
//     4,
//     3,
//     2,
//     1
//   ],
//   total: 30
// };
//     data.push(friend)
//     // here you can find the best match 
//     // I would use reduce or foreach
//     res.json(data)
//   });
// }



>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
