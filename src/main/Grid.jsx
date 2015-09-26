var React = require('react');
var Cell = require('./Cell.jsx');

module.exports = React.createClass({
  render: function() {
    var cells = [];
    for (var i = 0; i < 64; i++) {
      cells.push(<Cell />);
    }

    return <ul className="grid">
       {cells}
     </ul>;
  }
});
