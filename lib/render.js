require('./jsx-modules');

var path = require('path');
var componentToString = require('react').renderComponentToString;

function render(base) {
  return function (view, viewModel) {
    var file = path.join(base, view);
    return renderFile(file, viewModel);
  }
}

function renderFile(file, viewModel) {
  var template = require(file);
  var html = componentToString(template(viewModel));
  return html;
}

exports.render = render;
exports.renderFile = renderFile;

