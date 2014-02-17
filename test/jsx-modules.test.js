var assert = require('chai').assert;
var path = require('path');
var react = require('react');

describe('jsx-modules', function() {
  before(function() {
    require('../lib/jsx-modules');
    var file = path.join(__dirname, 'fixtures', 'template.jsx');
    this.template = require(file);
  });
  it('should return a ReactComponent instance', function() {
    assert.ok(react.isValidComponent(this.template));
  });
});
