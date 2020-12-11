import React from "react";
import axios from "axios";

class ListProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: [],
      prof: "",
      workers: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/api/profs")
      .then((res) => {
        const profs = res.data;
        console.log("profs", profs);
        this.setState({ profs });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // componentDidMount() {
  //   axios
  //     .post("http://localhost:3000/api/workers")
  //     .then((res) => {
  //       const workers = res.data;
  //       console.log("workers", workers);
  //       this.setState({ workers });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  handleChange(e) {
    var prof = e.currentTarget.value; //e.target.value;

    this.setState({ prof });
    console.log(this.state.prof);
    console.log("prof", prof);

    axios
      .post("http://localhost:3000/api/workers", { prof })
      .then((res) => {
        console.log("workers sent", res);
        this.setState({ workers: res.data }, () => {
          console.log("setstate", this.state.workers);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="profs">Choose a prof:</label>
          <select name="profs" id="profs" onChange={this.handleChange}>
            <option>Profession</option>
            {this.state.profs.map((prof, index) => (
              <option>{prof.name}</option>
            ))}
          </select>
        </form>
        {this.state.prof}
        {this.state.workers.map((worker, index) => (
          <p>{worker.userName}</p>
        ))}
      </div>
    );
  }
}

export default ListProf;
