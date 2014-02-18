var path = require('path');
var componentToString = require('react').renderComponentToString;

function render(base, view, viewModel) {
  var file = path.join(base, view);
  var template = require(file);
  var html = componentToString(template(viewModel));
  return html;
}

module.exports = render;

