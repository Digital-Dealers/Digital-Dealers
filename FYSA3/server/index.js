var express = require("express");
var bodyParser = require("body-parser");

var db = require("../database-mongo");

var app = express();
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(express.static(__dirname + "/../react-client/dist"));

app.get("/items", function (req, res) {
  db.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post("/register", (req, res) => {
  //to do
  console.log(req.body.data);

  db.addWorker(req.body.data, (err, worker) => {
    if(err){
      res.send("user not created")
    }else{
      res.json(worker);
    }
  })
});

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
