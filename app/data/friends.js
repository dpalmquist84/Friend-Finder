const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const server = require("../../server.js")
const app = require("../../server.js")


var friends = [];



  
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
