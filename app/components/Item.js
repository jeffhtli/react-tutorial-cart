var React = require('react');

var ItemList = React.createClass({

  render: function() {
    var { product } = this.props;
    return (
      <div>
        <span>{product.name}</span>
      </div>
    );
  }
});

module.exports = ItemList;