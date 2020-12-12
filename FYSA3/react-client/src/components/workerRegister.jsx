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

    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4 mx-auto">
            <h2 className="line-bottom text-center">Registeration Form</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 offset-3">
            <div className="testimonial-3"><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="quick-contact-form bg-white">
                <h2>Please fill-in the form to register.</h2>
                <form action="#" method="">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Name"/>
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <textarea name="" className="form-control" id="" cols="30" rows="5" placeholder="Message"></textarea>
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

export default Register;
