import React, { Component } from "react";
import axios from "axios";

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({
      [e.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h2>User Login</h2>
        <div className="infos">
          <label htmlFor="userName">Username</label>
          <input
            name="userName"
            type="text"
            style={{ display: "block" }}
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            style={{ display: "block" }}
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button onClick={() => this.handleClick(this.state)}> LogIn </button>
        </div>
      </div>
    );
  }
}

export default UserLogin;
