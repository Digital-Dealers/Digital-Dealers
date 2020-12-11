import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/workerRegister.jsx";
import WorkerLogin from "./components/WorkerLogin.jsx";
import ListProf from "./components/ListProf.jsx";
import Listworker from "./components/Listworker.jsx";
import OrdersList from "./components/OrdersList.jsx";
import Form from "./components/Form.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      workers: []
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h2>FYSA3</h2>
        <Register />
        <h1> Orders </h1>
        <OrdersList />
        <h1>Item List</h1>
        <WorkerLogin />
        <ListProf />
        <Form />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
