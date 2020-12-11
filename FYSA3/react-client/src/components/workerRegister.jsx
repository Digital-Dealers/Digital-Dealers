import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    console.log(this.refs.userName.value);
    var data = {
      userName: this.refs.userName.value,
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      location: this.refs.location.value,
      prof: this.refs.prof.value,
      rate: this.refs.rate.value,
      password: this.refs.password.value,
      infos: this.refs.infos.value
    };
    console.log(data);
    axios
      .post("/register", { data })
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
          <form action="/">
            {" "}
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="userName"
              placeholder="Username"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="firstName"
              placeholder="First Name"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-user"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="lastName"
              placeholder="Last Name"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="email"
              placeholder="Email"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="phone"
              placeholder="Phone Number"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="location"
              placeholder="Location"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="infos"
              placeholder="Infos"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="prof"
              placeholder="Profession"
              required
            />
            <hr />
            <label id="icon" htmlFor="name">
              <i className="fas fa-envelope"></i>
            </label>
            <input
              type="text"
              name="name"
              ref="prof"
              placeholder="Rate"
              required
            />
            <label id="icon" htmlFor="name">
              <i className="fas fa-unlock-alt"></i>
            </label>
            <input
              type="password"
              name="name"
              ref="password"
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

export default Register;
