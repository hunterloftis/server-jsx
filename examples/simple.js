var express = require('express');
var render = require('..');

var app = express();

app.use(function(req, res, next) {
  var html = render(__dirname, 'template', {
    city: 'San Francisco',
    route: req.path
  });
  res.send(html);
});

app.listen(4000);

