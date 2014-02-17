var assert = require('chai').assert;
var path = require('path');
var render = require('../lib/render');

describe('render', function() {
  before(function() {
    var file = path.join(__dirname, 'fixtures', 'template.jsx');
    this.html = render(file, { route: '/foo/bar' });
  });
  it('should return rendered html', function() {
    assert.include(this.html, '<h1 data-reactid="');
    assert.include(this.html, '</h1>');
    assert.include(this.html, '&#x2f;foo&#x2f;bar');
  });
});
