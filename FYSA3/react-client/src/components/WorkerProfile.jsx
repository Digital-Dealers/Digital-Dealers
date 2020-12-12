import React from "react";
import axios from "axios";

class WorkerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: {}
    };
  }

  componentDidMount() {
    axios
      .get("/api/workerProfile")
      .then((res) => {
        const worker = res.data;
        console.log("workerProfile", worker);
        this.setState({ worker });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>welcome, {this.state.worker.userName}</p>
        <p>Email:{this.state.worker.email}</p>
        <p>Phone:{this.state.worker.phone}</p>
        <p>Location: {this.state.worker.location}</p>
      </div>
    );
  }
}

export default WorkerProfile;
