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

app.get("/workers", (req, res) => {
  db.selectAll((err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});
app.post("/login", (req, res) => {
  console.log(req.body);
  db.selectOneWorker(req.body, (err, worker) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log(worker);
      res.send(worker);
    }
  });
});

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
