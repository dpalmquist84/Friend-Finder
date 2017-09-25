const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const friends = require("./app/data/friends.js");
const html = require("./app/routing/htmlRoutes.js")
const api = require('./app/routing/apiRoutes.js')


module.exports = app;

const data = require("./app/data/data.js")



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
html(app)
api(app)
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });


