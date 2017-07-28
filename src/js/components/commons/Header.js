import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="light-blue lighten-1">
          <div className="nav-wrapper container">
            <a id="logo-container" href="/" className="brand-logo left">AMBS</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/">Signup</a></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}
export default Header;
