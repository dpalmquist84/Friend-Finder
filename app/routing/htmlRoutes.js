
const path = require("path");
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> parent of 8b37625... changes to the routes
=======

>>>>>>> parent of 8b37625... changes to the routes
=======

>>>>>>> parent of 8b37625... changes to the routes
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
=======
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7


module.exports = function(app) {


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey2.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

<<<<<<< HEAD
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

<<<<<<< HEAD
  app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/friends.html"));
  });

  app.get("/bestFriends", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/bestFriends.html"));
  });

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/app/public/home.html"));
  // });
>>>>>>> 793694c32cd1c14cd8244a74b1d8271cf41856e7


}


<<<<<<< HEAD
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
