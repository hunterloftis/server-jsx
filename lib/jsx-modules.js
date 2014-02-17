var read = require('fs').readFileSync;
var transform = require('react-tools').transform;

transform('');
require.extensions['.jsx'] = requireJSX;

function requireJSX(module, file) {
  try {
    var src = read(file, { encoding: 'utf8' });
    var transformed = transform(src);
    module._compile(transformed, file);
  } catch(e) {
    throw new Error('Error requiring JSX file ' + file + ': ' + e.toString());
  }
}
