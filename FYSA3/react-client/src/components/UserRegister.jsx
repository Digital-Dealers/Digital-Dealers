
import React, { Component } from "react";
import axios from "axios";

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      password: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleClick(e) {
    e.preventDefault();
    var data = this.state;
    console.log(data);
    axios
      .post("/userRegister", { data })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {

        console.log("There's an error", err);
      });
  }

  render() {
    return (
      <div>
        <h3>Worker Sign-Up</h3>
        <div className="main-block">
          <h1>Registration</h1>
          <form>
            {" "}
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input
              value={this.state.userName}
              onChange={this.handleChange}
              type="text"
              name="userName"
              placeholder="Username"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              name="firstName"
              placeholder="First Name"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input
              value={this.state.lastName}
              onChange={this.handleChange}
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
              placeholder="Email"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              value={this.state.phone}
              onChange={this.handleChange}
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              value={this.state.location}
              onChange={this.handleChange}
              type="text"
              name="location"
              placeholder="Location"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-unlock-alt"></i>
            </label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <hr />
            <div className="btn-block">
              <button onClick={this.handleClick} type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserRegister;
