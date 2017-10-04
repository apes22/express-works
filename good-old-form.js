/*
Exercise 4 of 8

Write a route ('/form') that processes HTML form input
(<form><input name="str"/></form>) and prints backwards the str value.

*/

//require the modules we need
var express = require('express');
var bodyparser = require('body-parser');

//build the app
var app = express();

app.use(bodyparser.urlencoded({extended: false}));


//a route form
app.post('/form', function(req, res) {
      res.send( req.body.str.split('').reverse().join(''));
      
});

app.listen(process.argv[2])
