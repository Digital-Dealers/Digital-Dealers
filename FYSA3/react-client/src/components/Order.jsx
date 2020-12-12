import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>Order</h3>
        <div className="order">
          <label for="state">State</label>
          <input ref="state" style={{ display: "block" }} />
          <label for="location">Location</label>
          <input ref="location" style={{ display: "block" }} />
          <label for="date">Date</label>
          <input ref="date" style={{ display: "block" }} />
          <label for="description">Description</label>
          <input ref="description" style={{ display: "block" }} />
        </div>
        <div className="Button">
          <button >Send Your Order</button>
        </div>
      </div>
    );
  }
}

export default Order;
