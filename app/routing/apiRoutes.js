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
  });

  app.post("/api/friends", function(req, res) {
    res.json(friends);
  });

