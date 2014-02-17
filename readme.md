# server-jsx

JSX Rendering in node.js:

```js
var express = require('express');
var jsx = require('server-jsx');

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
```

## Installation

`npm install --save server-jsx`

## Test

`npm test`

## Examples

1. `npm run example`
2. open [http://localhost:4000/foo/bar](http://localhost:4000/foo/bar)

