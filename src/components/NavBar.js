import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

class NavBar extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 fixed-top">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Me</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
              </li>
            </ul>
            </div>
          </div>
        </nav>
    );
  }


}
export default NavBar;
