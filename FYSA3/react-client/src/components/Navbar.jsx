import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav
          className="site-navigation text-right ml-auto d-none d-lg-block"
          role="navigation">
          <ul className="site-menu main-menu js-clone-nav ml-auto ">
            <li className="active">
              <a href="index.html" className="nav-link">
                Homes
              </a>
            </li>
            <li
              onClick={() => {
                this.props.handleClick("user-signup");
              }}>
              <a className="nav-link">User Sign-Up</a>
            </li>
            <li
              onClick={() => {
                this.props.handleClick("worker-signup");
              }}>
              <a className="nav-link">Worker Sign-Up</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
