import React, { Component } from 'react';

class workerFeed extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h2>Worker Feed</h2>
        <div>
          <h2>Orders List</h2>
          <ul>
            {this.props.data.map((order, i) => {
              return (
              <li key={i}>
                <div>{order.location}</div>
                <div>{order.date}</div>
                <div>{order.state}</div>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default workerFeed;
