import React from "react";
import ReactDOM from "react-dom";
import Register from "./components/workerRegister.jsx";
import WorkerLogin from "./components/WorkerLogin.jsx";
import ListProf from "./components/ListProf.jsx";
import OrdersList from "./components/OrdersList.jsx";
import UserLogin from "./components/UserLogin.jsx";
import Feeds from './components/feeds/feeds.jsx'

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
        <h1>FYSA3</h1>
        <Register />
        <h2>Worker Sign In</h2>
        <WorkerLogin />
        <h2>Custumer Sign In</h2>
        <UserLogin />
        <h2> Orders </h2>
        <OrdersList />
        <h2>Feeds</h2>
        <Feeds />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
