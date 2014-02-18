var assert = require('chai').assert;
var path = require('path');
var render = require('..');

describe('render', function() {
  before(function() {
    this.html = render(__dirname, 'fixtures/template.jsx', {
      route: '/foo/bar'
    });
  });
  it('should return rendered html', function() {
    assert.include(this.html, '<h1 data-reactid="');
    assert.include(this.html, '</h1>');
    assert.include(this.html, '&#x2f;foo&#x2f;bar');
  });
});
