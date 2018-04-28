import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <header className="Nav-header">
          <h1 className="Nav-title">NavBar</h1>
        </header>
        <div className="NavBar">
          <h1>SBA BOT</h1>
          <ul className="NavList">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Log In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
