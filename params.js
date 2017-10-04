/*
Exercise 6 of 8

Create an Express.js server that processes PUT '/message/:id' requests.

For instance:

    PUT /message/526aa677a8ceb64569c9d4fb

As a response to these requests, return the SHA1 hash of the current date
plus the sent ID:

*/

//require the modules we need
var express = require('express');

//build the app
var app = express();

//processes PUT requests
app.put('/message/:id', function(req, res){
  var sha1Hash = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex')
  res.end(sha1Hash);
 
});
  
app.listen(process.argv[2])