var express = require('express');
var path = require('path');
var render = require('..').render;

var app = express();

app.use(function(req, res, next) {
  var template = path.join(__dirname, 'template.jsx');
  var html = render(template, {
    route: req.path
  });
  res.send(html);
});

app.listen(4000);

