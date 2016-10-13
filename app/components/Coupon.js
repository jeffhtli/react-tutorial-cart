var React = require('react');

var Coupon = React.createClass({

  render: function() {
    return(<div>
      <span>Discount: </span>
      <select onChange={this.couponChanged}>
        <option value="0">None</option>
        <option value="1">5% Discount</option>
      </select>
    </div>);
  },

  couponChanged: function(e) {
    this.props.changeDiscount(e.target.value == 1 ? 0.05 : 0)
  }

});

module.exports = Coupon;