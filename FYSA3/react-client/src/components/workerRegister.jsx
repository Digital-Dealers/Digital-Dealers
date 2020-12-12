import React from "react";
import axios from "axios";
class WorkerRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      prof: "",
      rate: "",
      password: "",
      infos: ""
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
      .post("/workerRegister", { data })
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
<<<<<<< HEAD
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
          <label>Prof</label>
          <input
            type="text"
            name="prof"
            value={this.state.prof}
            onChange={this.handleChange}
          />
          <label>Rate</label>
          <input
            type="text"
            name="rate"
            value={this.state.rate}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Infos</label>
          <input
            type="text"
            name="infos"
            value={this.state.infos}
            onChange={this.handleChange}
          />
        </div>
        <div className="Button">
          <button onClick={this.handleClick}>Create Worker Profile</button>
        </div>
      </div>
=======
        <div className="site-section bg-light">
          <div className="container">
            <div className="row mb-5">
              <div className="col-md-4 mx-auto">
                <h2 className="line-bottom text-center">Registeration Form</h2>
              </div>
              </div>
              <div className="row">
                <div className="col-lg-6 offset-3">
                  <div className="testimonial-3">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="quick-contact-form bg-white">
                      <h2>Please fill-in the form to register.</h2>
                      <form action="#" method="">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div className="form-group">
                          <textarea
                            name=""
                            className="form-control"
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                          <input
                            type="submit"
                            value="Send Message"
                            className="btn btn-primary px-5"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
    
>>>>>>> 515d3d1a5fc69d494e6f1d7ab43774d00e6adf7c
    );
  }
}

export default WorkerRegister;
