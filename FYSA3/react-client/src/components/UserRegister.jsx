import React from "react";
import axios from "axios";
import React, { Component } from "react";
import axios from "axios";
class UserRegister extends React.Component {
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
<<<<<<< HEAD
  handleClick(e) {
    e.preventDefault();
    var data = this.state;
    console.log(data);

    axios
      .post("/userRegister", { data })
=======
  handleClick(event) {
    event.preventDefault();
    var data = this.state;
    console.log(data);
    axios
      .post("/register/user", { data })
>>>>>>> 515d3d1a5fc69d494e6f1d7ab43774d00e6adf7c
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
<<<<<<< HEAD
        console.log("error");
      });
  }
  render() {
    return (
      <div>
        <h3>User Sign-Up</h3>
        <div className="infos">
          <label>User Name</label>
          <input
            type="text"
            name="userName"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="Button">
          <button onClick={this.handleClick}>Create User Profile</button>
=======
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
>>>>>>> 515d3d1a5fc69d494e6f1d7ab43774d00e6adf7c
        </div>
      </div>
    );
  }
}

export default UserRegister;
