var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongojs = require("mongojs");

//Set up static folder)
app.use(express.static(__dirname+'/public'));

//Set up bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res){
   res.send('Hello World');
});

app.listen(3000);
console.log('Server running on port 3000');