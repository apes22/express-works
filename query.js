/*
Exercise 7 of 8

Write a route that extracts data from query string in the GET '/search' URL
route, e.g. ?results=recent&include_tabs=true and then outputs it back to
the user in JSON format.

*/
//require the modules we need
var express = require('express');

//build the app
var app = express();
  
//processes GET requests
app.get('/search', function(req, res){
  res.send(JSON.stringify(req.query));
}); 

app.listen(process.argv[2])