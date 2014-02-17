var koa = require('koa');
var path = require('path');
var render = require('..').render;

var app = koa();

app.use(function *() {
  this.body = render(path.join(__dirname, 'template.jsx'), {
    route: this.path
  });
});

app.listen(4000);

