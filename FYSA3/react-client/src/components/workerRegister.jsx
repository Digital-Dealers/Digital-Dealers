import React, { Component } from "react";
import axios from "axios";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
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
        <div className="infos">
          <label for="userName">Username</label>
          <input ref="userName" style={{ display: "block" }} />
          <label for="firstName">First Name</label>
          <input ref="firstName" style={{ display: "block" }} />
          <label for="lastName">Last Name</label>
          <input ref="lastName" style={{ display: "block" }} />
          <label for="email">Email</label>
          <input ref="email" style={{ display: "block" }} />
          <label for="phone">Phone</label>
          <input ref="phone" style={{ display: "block" }} />
          <label for="location">Location</label>
          <input ref="location" style={{ display: "block" }} />
          <label for="password">Password</label>
          <input ref="password" style={{ display: "block" }} />
          <label for="infos">infos</label>
          <input ref="infos" style={{ display: "block" }} />
          <label for="prof">prof</label>
          <input ref="prof" style={{ display: "block" }} />
          <label for="rate">rate</label>
          <input ref="rate" style={{ display: "block" }} />
        </div>
        <div className="Button">
          <button onClick={this.handleClick}>Create Profile</button>
        </div>
      </div>
    );
  }
}

export default Register;
