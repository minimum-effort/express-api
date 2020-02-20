var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

  app.use(bodyParser.json())
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  var routes = require('./api/routes/routes');
  routes(app);

  app.listen(port);

console.log('Movie api started on localhost:' + port);