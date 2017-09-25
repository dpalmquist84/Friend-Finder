const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const friends = require("./app/data/friends.js");
const html = require("./app/routing/htmlRoutes.js")
const api = require('./app/routing/apiRoutes.js')


module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
html(app)
api(app)
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});





