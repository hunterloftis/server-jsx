require('./jsx-modules');

var componentToString = require('react').renderComponentToString;

function render(view, viewModel) {
  var template = require(view);
  var html = componentToString(template(viewModel));
  return html;
}

module.exports = render;
