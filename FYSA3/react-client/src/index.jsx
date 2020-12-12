import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/workerRegister.jsx";
import WorkerLogin from "./components/WorkerLogin.jsx";
import ListProf from "./components/ListProf.jsx";
import OrdersList from "./components/OrdersList.jsx";
import Order from "./components/Order.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <WorkerLogin />
        <ListProf />
        <Order />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
