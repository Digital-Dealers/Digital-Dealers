import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/workerRegister.jsx";
import UserRegister from "./components/UserRegister.jsx";
import Home from "./components/Home.jsx";
import WorkerLogin from "./components/Login.jsx";
import ListProf from "./components/ListProf.jsx";
import OrdersList from "./components/OrdersList.jsx";
import Button from "react-bootstrap/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      workers: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(view) {
    this.setState({ view });
  }
  componentDidMount() {}

  render() {
    if (this.state.view === "home") {
      return <Home handleClick={this.handleClick} />;
    } else if (this.state.view === "user-signup") {
      return (
        <div>
          <UserRegister />
        </div>
      );
    } else if (this.state.view === "worker-signup") {
      return (
        <div>
          <Register />
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
