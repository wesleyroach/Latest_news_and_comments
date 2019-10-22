var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;
var app = express();
var router = express.router();
app.use(express.static(_dirname + "/public"));
app.engine(
  "handlebars",
  expresshandlebars({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlbars");
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(router);
var db =
  process.env.MONGODB_URI ||
  "mongodb://newsapp:Kolo1toure@ds137488.mlab.com:37488/heroku_q438j7gq";
mongoose.connect(db, function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("mongoose connection is successful");
  }
});
app.listen(PORT, function() {
  console.log("Listening on PORT  " + PORT);
});
