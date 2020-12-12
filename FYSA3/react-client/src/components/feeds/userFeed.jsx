import React, { Component } from "react";

class userFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>User Feed</h2>
        <div>
          <h2>Profs List</h2>
          <ul>
            {this.props.data.map((element, i) => {
              return (
                <li key={i}>
                  <div>{element.name}</div>
                  <div>
                    <ul>
                      {element.workers.map((worker, i) => (
                        <li key={i}>worker</li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default userFeed;
