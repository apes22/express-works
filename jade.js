/*
Exercise 3 of 8

Create an Express.js app with a home page rendered by Jade template engine.
The homepage should respond to /home.
The view should show the current date using toDateString.

*/

//require the modules we need
var express = require('express');

//build the app
var app = express();

//Specify path 
app.set('views', process.argv[3]);

 // Let's use the Jade templating language
app.set("view engine", "jade");

//homepage
app.get('/home', function(req, res) {
      res.render('index', {date: new Date().toDateString()})
});

app.listen(process.argv[2])