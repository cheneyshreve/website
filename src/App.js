import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Data from './components/Data.js';
import { Navbar,Nav, NavItem,NavDropdown, MenuItem, PageHeader } from 'react-bootstrap';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header>

          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">TKC</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                <Link to='/'>Home </Link>
                </NavItem>
                <NavDropdown eventKey={3} title="Solutions" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Hazard Assessments</MenuItem>
                  <MenuItem eventKey={3.2}>Data Analysis</MenuItem>
                  <MenuItem eventKey={3.3}>Software & Web Services</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4}>Reporting & Reviews</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                 Data
                </NavItem>
                <NavItem eventKey={2} href="#">
                 Blog
                </NavItem>
                <NavItem eventKey={3} href="#">
                  Contact
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>

        <main>
          <Route exact path="/" component={Home} />
        </main>

      </div>


    );
  }
}

export default App;
