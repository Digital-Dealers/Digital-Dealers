import React from "react";
import ReactDOM from "react-dom";
import WorkerLogin from "./components/WorkerLogin.jsx";
import ListProf from "./components/ListProf.jsx";
import Listworker from "./components/Listworker.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      workers: []
    };
  }

  render() {
    return (
      <div>
        <h1>Item List</h1>
        <WorkerLogin />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
