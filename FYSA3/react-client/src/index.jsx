import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import WorkerLogin from "./components/WorkerLogin.jsx";
import Register from "./components/workerRegister.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    $.ajax({
      url: "/items",
      success: (data) => {
        this.setState({
          items: data
        });
      },
      error: (err) => {
        console.log("err", err);
      }
    });
  }

  render() {
    return (
      <div>
        <h2>FYSA3</h2>
        <Register />
        <WorkerLogin />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
