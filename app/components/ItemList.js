var React = require('react');
var Item = require('./Item.js');

var ItemList = React.createClass({

  render: function() {
    var { productList } = this.props;
    var node = productList.map((product) => {
      return (<Item product={product} />);
    });
    return (<div>{node}</div>);
  }
});

module.exports = ItemList;