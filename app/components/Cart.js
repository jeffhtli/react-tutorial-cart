var React = require('react');
var ItemList = require('./ItemList.js');
var Coupon = require('./Coupon.js');
var numeral = require('numeral');

var Cart = React.createClass({

  productList: [
    {name: 'Kindle paperwhite', price: 998},
    {name: 'Mi Note LTE', price: 899},
    {name: '《You don\'t know JS》', price: 60}
  ],

  getInitialState: function() {
    return {
      discount: 0,
      subtotal: this.productList.reduce(function(accu, curr){
        return accu + curr.price;
      }, 0)
    }
  },

  render: function() {
    return (
      <div>
        <ItemList productList={this.productList} changeTotal={this.changeTotal} /><br/>
        <Coupon changeDiscount={this.changeDiscount} /><br/>
        <div style={styleTotal}>Subtotal: ￥{numeral(this.state.subtotal).format('0.00')}</div><br/>
        <div style={styleTotal}>Discount: ￥{numeral(this.state.subtotal * this.state.discount).format('0.00')}</div><br/>
        <div style={styleTotal}>Total: ￥{numeral(this.state.subtotal - this.state.subtotal * this.state.discount).format('0.00')}</div>
      </div>
    );
  },

  changeTotal: function(delta) {
    console.log(delta);
    this.setState({subtotal: this.state.subtotal + delta})
  },

  changeDiscount: function(discount) {
    this.setState({discount: discount })
  }
});

var styleTotal = {
  width: 800,
  display: 'table-cell',
  textAlign: 'right',
  verticalAlign: 'middle'
};

module.exports = Cart;