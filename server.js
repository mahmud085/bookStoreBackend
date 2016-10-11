var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var Data = require("./data/data");
var _ = require("underscore");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(express.static(__dirname));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api',function(req,res){
    //console.log("hit here get");
    Data.find(function (err, data) {
        if (err)
            res.send(err);
        else
            res.json(data);
    });
});

app.post('/api',function(req,res){
    //console.log("post req ",req);
    console.log("post body ",req.body);
    var data = new Data(_.extend({}, req.body));
    data.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(data);
    });
});
app.listen(process.env.PORT || 3001, function() {
    console.log('Server listening');
});
mongoose.connect("mongodb://localhost/react");