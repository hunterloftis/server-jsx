# server-jsx

JSX Rendering in node.js:

```js
var express = require('express');
var render = require('server-jsx');

var app = express();

app.use(function(req, res, next) {
  var html = render(__dirname, 'template', {
    city: 'San Francisco',
    route: req.path
  });
  res.send(html);
});

app.listen(4000);
```

## Installation

`npm install --save server-jsx`

server-jsx uses React 0.9.0rc1.

## Test

`npm test`

## Examples

1. `npm run example`
2. open [http://localhost:4000/foo/bar](http://localhost:4000/foo/bar)

