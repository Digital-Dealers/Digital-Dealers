import React from "react";

class Listworker extends React.Component {
  constructor(props) {
    super(props);
    
    };
  
  render() {
    return (
      <div>
        <form action="/action_page.php">
          <label htmlfor="workrs">Choose a worker:</label>
          <select name="workers" id="workers">
            <option value="worker1">{this.props.prof}</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Listworker;
