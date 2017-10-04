/*
Exercise 9 of 8

Write a server that reads a file, parses it to JSON and outputs the content
to the user.

The port is passed in process.argv[2].  The file name is passed in process.argv[3].

Respond with:

    res.json(object)

Everything should match the '/books' resource path.
*/


//require the modules we need
var express = require('express');
var fs = require('fs');

//build the app
var app = express();


//processes GET requests from url action /books
app.get('/books', function(req, res){
  var result = "";
  fs.readFile(process.argv[3], function(err,data){
    if (err){
   return res.send(500)
    }
   try {
      var books = JSON.parse(data)
    } catch (e) {
         res.send(500)
     }
      res.setHeader( 'Content-Type', 'application/json');
      res.json(books)
    })
  })

app.listen(process.argv[2]);