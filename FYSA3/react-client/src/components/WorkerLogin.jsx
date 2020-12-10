import React from "react";
import axios from "axios";

class WorkerLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    var name = e.target.value;
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(user) {
    axios
      .post("/login", user)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => {
        console.log("error");
      });
  }
  render() {
    return (
      <div class="container">
        <div class="main">
          <h2>Login Form Validation</h2>
          <form id="form_id" method="post" name="myform">
            <label>User Name :</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <label>Password :</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </form>
          <button
            value="Login"
            onClick={() => {
              this.handleClick(this.state);
            }}>
            {" "}
            Log In
          </button>
        </div>
      </div>
    );
  }
}

export default WorkerLogin;
