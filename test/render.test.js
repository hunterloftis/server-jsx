var assert = require('chai').assert;
var path = require('path');
var render = require('..').render;

describe('render', function() {
  before(function() {
    var jsx = render(__dirname);
    this.html = jsx('fixtures/template.jsx', { route: '/foo/bar' });
  });
  it('should return rendered html', function() {
    assert.include(this.html, '<h1 data-reactid="');
    assert.include(this.html, '</h1>');
    assert.include(this.html, '&#x2f;foo&#x2f;bar');
  });
});
