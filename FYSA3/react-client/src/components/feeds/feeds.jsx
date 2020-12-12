import React, { Component } from "react";

import UserFeed from "./userFeed.jsx";
import WorkerFeed from "./workerFeed.jsx";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profsData: dummyProfs,
      ordersData: dummyOrders,
      isWorker: true
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.state.isWorker ? (
          <WorkerFeed data={this.state.ordersData} />
        ) : (
          <UserFeed data={this.state.profsData} />
        )}
      </div>
    );
  }
}

export default Feeds;

//this dummy data is used just for now, instead of the props(fetched data) coming from the parent

var dummyProfs = [
  {
    name: "prof 1",
    workers: ["worker 1", "worker 2", "worker 3"]
  },
  {
    name: "prof 2",
    workers: ["worker 1", "worker 2", "worker 3"]
  },
  {
    name: "prof 3",
    workers: ["worker 1", "worker 2", "worker 3"]
  }
];

var dummyOrders = [
  {
    date: "12 / 2 / 2021",
    state: "panding",
    location: "location 1"
  },
  {
    date: "12 / 2 / 2021",
    state: "panding",
    location: "location 2"
  },
  {
    date: "12 / 2 / 2021",
    state: "panding",
    location: "location 3"
  }
];
