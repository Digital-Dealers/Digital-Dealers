import React from "react";
import axios from "axios";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    axios
      .get("/api/userProfile")
      .then((res) => {
        const user = res.data;
        console.log("userProfile", user);
        this.setState({ user });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <p>welcome, {this.state.user.userName}</p>
        <p>Email:{this.state.user.email}</p>
        <p>Location: {this.state.user.location}</p>
      </div>
    );
  }
}

export default UserProfile;
