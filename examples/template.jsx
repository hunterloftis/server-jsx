/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Welcome to { this.props.city }!</h1>
        <p>Route: { this.props.route }</p>
      </div>
    );
  }
});
