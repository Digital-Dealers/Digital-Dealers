var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://user:Y0QIFKndntB1HIz3@cluster0.efioa.mongodb.net/DIGITAL-DEALERS?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//
//user
//Y0QIFKndntB1HIz3

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

var workerSchema = mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  location: String,
  prof: String,
  rate: Number,
  password: String,
  infos: String
});
var userSchema = mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: Number,
  location: String,
  password: String
});
var orderSchema = mongoose.Schema({
  userId: String,
  workerId: String,
  date: String,
  state: String,
  location: String
});

var profSchema = mongoose.Schema({
  name: String,
  workers: Array
});

var Worker = mongoose.model("Worker", workerSchema);
var User = mongoose.model("User", userSchema);
var Prof = mongoose.model("Prof", profSchema);
var Order = mongoose.model("Order", orderSchema);

var selectAllProf = function (callback) {
  Prof.find({}, function (err, prof) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, prof);
    }
  });
};
var selectOneWorker = function (worker, callback) {
  Worker.findOne(
    { userName: worker.username, password: worker.password },
    function (err, Worker) {
      if (err) {
        callback(err, null);
      } else {
        console.log(worker);
        callback(null, Worker);
      }
    }
  );
};


module.exports.selectAll = selectAll;
module.exports.selectOneWorker = selectOneWorker;
module.exports.selectAllProf = selectAllProf;

