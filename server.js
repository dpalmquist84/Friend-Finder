const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const friends = require("./app/data/friends.js");
const html = require("./app/routing/htmlRoutes.js")
const api = require('./app/routing/apiRoutes.js')


module.exports = app;
<<<<<<< HEAD
=======
=======
const data = require("./app/data/data.js")

// module.exports = app;
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
=======
>>>>>>> parent of 8b37625... changes to the routes
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7
=======
>>>>>>> parent of 8b37625... changes to the routes
=======
>>>>>>> parent of 8b37625... changes to the routes
=======
>>>>>>> parent of 8b37625... changes to the routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
html(app)
api(app)
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
// var friends = [];

=======
>>>>>>> parent of 8b37625... changes to the routes
=======
>>>>>>> parent of 8b37625... changes to the routes
=======
>>>>>>> parent of 8b37625... changes to the routes
=======
>>>>>>> parent of 8b37625... changes to the routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });
=======
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
post();

// Create New Characters - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newFriend = req.body;
//   newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7


<<<<<<< HEAD
=======
=======
>>>>>>> 2cdf4114a030655ddc03fa527b84e09faafe6638
=======
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
>>>>>>> parent of 8b37625... changes to the routes
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7
=======
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
>>>>>>> parent of 8b37625... changes to the routes
=======
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
>>>>>>> parent of 8b37625... changes to the routes
=======
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
>>>>>>> parent of 8b37625... changes to the routes
