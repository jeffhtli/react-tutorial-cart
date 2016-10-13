var React = require('react');
var numeral = require('numeral');

var ItemList = React.createClass({

  getInitialState: function() {
    this.changeTotal = this.props.changeTotal;
    this.price = this.props.product.price;
    return {quantity: 1}
  },

  render: function() {
    var { product } = this.props;
    return (
      <div style={styleProduct}>
        <div style={styleName}>{product.name}</div>
        <div style={stylePrice}>￥{numeral(product.price).format('0.00')}</div>
        <div style={styleQuantity}>
          <input type="button" value="-" onClick={this.sub} />
          <span style={styleQuantityNum}>{this.state.quantity}</span>
          <input type="button" value="+" onClick={this.add} />
        </div>
        <div style={stylePrice}>￥{numeral(product.price * this.state.quantity).format('0.00')}</div>

      </div>
    );
  },

  sub: function() {
    if (this.state.quantity > 1) {
      this.setState({quantity: this.state.quantity - 1});
      this.changeTotal(-this.price)
    }
  },

  add: function() {
    this.setState({quantity: this.state.quantity + 1});
    this.changeTotal(this.price)
  }
});


var styleProduct = {
  height: 50,
  width: 800,
  borderBottom: '1px solid grey'
};

var styleName = {
  display: 'table-cell',
  width: 400,
  height: '50px',
  textAlign: 'center',
  verticalAlign: 'middle'
};

var styleQuantity = {
  display: 'table-cell',
  height: '50px',
  width: 200,
  textAlign: 'center',
  verticalAlign: 'middle'
};

var styleQuantityNum = {
  marginLeft: 10,
  marginRight: 10
};

var stylePrice = {
  display: 'table-cell',
  height: '50px',
  width: '100px',
  verticalAlign: 'middle'
};

module.exports = ItemList;