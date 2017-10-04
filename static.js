/*
Exercise 2 of 8

Apply static middleware to serve index.html file without any routes.

Your solution must listen on the port number supplied by process.argv[2].

The index.html file is provided and usable via the path supplied by
process.argv[3]. However, you can use your own file with this content:

*/

//require the modules we need
var express = require('express');
 var path = require('path');

//build the app
var app = express();

//add middelware
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])