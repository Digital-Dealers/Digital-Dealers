import React from "react";
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
        </div>
      </div>
    );
  }
}

export default UserRegister;
