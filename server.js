var express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  Movie = require('./api/models/movieModel'), 
  port = process.env.PORT || 3000;

  mongoose.Promise = global.Promise;
  //mongoose.connect('mongodb+srv://YOURUSER:YOURPASSWORD@YOURHOST/YOURDATABASE?retryWrites=true');
  //It might look something like below:
  //mongoose.connect('mongodb+srv://admin:12345@cluster0-1a1a1.mongodb.net/movieapp?retryWrites=true');

  var routes = require('./api/routes/routes');
  routes(app);

  app.listen(port);

console.log('Movie api started on localhost:' + port);