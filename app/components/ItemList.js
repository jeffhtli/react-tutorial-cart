var React = require('react');
var Item = require('./Item.js');

var ItemList = React.createClass({

  render: function() {
    var { productList, changeTotal} = this.props;
    var node = productList.map((product, index) => {
      return (<Item product={product} changeTotal = {changeTotal} key={index} />);
    });
    return (<div>{node}</div>);
  }
});

module.exports = ItemList;