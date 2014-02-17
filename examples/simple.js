var express = require('express');
var jsx = require('..');

var app = express();
var render = jsx(__dirname);

app.use(function(req, res, next) {
  var html = render('template', {
    city: 'San Francisco',
    route: req.path
  });
  res.send(html);
});

app.listen(4000);

