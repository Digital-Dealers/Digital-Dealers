import React from "react";
import axios from "axios";

class ListProf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profs: []
    };
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

  render() {
    return (
      <div>
        <form action="/action_page.php">
          <label htmlFor="profs">Choose a prof:</label>
          <select name="profs" id="profs">
            {this.state.profs.map((prof, index) => (
              <option value="profs">{prof.name}</option>
            ))}
          </select>
        </form>
      </div>
    );
  }
}

export default ListProf;
