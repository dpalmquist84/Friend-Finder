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

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friends = [];
 
    console.log(`cleared: ${friends}`);
  });
};



  
  
  



