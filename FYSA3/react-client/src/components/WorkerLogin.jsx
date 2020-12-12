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
      <div>

    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 mx-auto">
            <h2 className="line-bottom text-center">Login Form</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-3">
            <div className="testimonial-3"><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="quick-contact-form bg-white">
                <h2>Welcome Back!</h2>
                <form action="#" method="">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password"/>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary px-5"/>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
    );
  }
}

export default WorkerLogin;
