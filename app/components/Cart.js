var React = require('react');
var ItemList = require('./ItemList.js');

var Cart = React.createClass({

  render: function() {
    var productList = [
      {name: 'Kindle white paper'},
      {name: 'Mi Note LTE'}
    ];

    return (
      <ItemList productList={productList} />
    );
  }
});

module.exports = Cart;