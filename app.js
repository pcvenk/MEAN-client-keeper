var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongojs = require("mongojs");
//mongojs setup (first parameter is the db name, second the coll name)
var db = mongojs('client-keeper', ['clients']);

//Set up static folder)
app.use(express.static(__dirname+'/public'));

//Set up bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Getting the list of clients
app.get('/clients', function(req, res){
   //get the data in the collection
   db.clients.find(function(err, docs){
      if(err){
         console.log('Request sent');
         res.send(err);
      } else {
         console.log('Sending data...');
         res.send(docs);
      }
   });
});

//Adding a new client
app.post('/clients', function(req, res){

   //data comes from req.body
   db.clients.insert(req.body, function(err, doc){
      if(err){
         res.send(err);
      } else {
         console.log('New client inserted');
         res.send(doc);
      }
   })
});

app.listen(3000);
console.log('Server running on port 3000');