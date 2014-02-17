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
  it("should error 'Cannot find' if the file doesn't exist", function() {
    assert.throw(requireMissing, /Cannot find/);

    function requireMissing() {
      require('./missing.jsx');
    }
  });
  it("should error 'Parse Error' if the jsx has errors", function() {
    assert.throw(requireBad, /Parse Error/);

    function requireBad() {
      require('./fixtures/bad-template.jsx');
    }
  });
});
