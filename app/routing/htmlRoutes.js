
const path = require("path");






module.exports = function(app) {


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey2.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });


  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });


  app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/friends.html"));
  });

  app.get("/bestFriends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/bestFriends.html"));
  });




}


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

