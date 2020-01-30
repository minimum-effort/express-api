var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

  var routes = require('./api/routes/routes');
  routes(app);

  app.listen(port);

console.log('Movie api started on localhost:' + port);