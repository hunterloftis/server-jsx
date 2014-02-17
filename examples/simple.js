var express = require('express');
var render = require('..').render;

var app = express();
var jsx = render(__dirname);

app.use(function(req, res, next) {
  var html = jsx('template', {
    city: 'San Francisco',
    route: req.path
  });
  res.send(html);
});

app.listen(4000);

