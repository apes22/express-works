/*
Exercise 5 of 8

Style your HTML from previous example with some Stylus middleware.

Your solution must listen on the port number supplied by process.argv[2].

The path containing the HTML and Stylus files is provided in process.argv[3]
(they are in the same directory). You can create your own folder and use these:

*/

//require the modules we need
var express = require('express'),
 stylus = require('stylus');

//build the app
var app = express();


//add middelware
app.use(express.static(process.argv[3]));
app.use(require('stylus').middleware(process.argv[3]));
 
app.listen(process.argv[2])