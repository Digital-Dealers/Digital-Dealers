import React from "react";
import ReactDOM from "react-dom";
import List from "./components/List.jsx";
import OrdersList from "./components/OrdersList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1> Orders </h1>
        <OrdersList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
