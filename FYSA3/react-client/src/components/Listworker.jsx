import React from "react";

class Listworker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
     
        <form action="/action_page.php">
          <label for="workrs">Choose a worker:</label>
          <select name="workers" id="workers">
            <option value="worker1">worker1</option>
          
          </select>
        </form>
      </div>
    );
  }
}

export default Listworker;
