import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Data from './components/Data.js';
import { Navbar,Nav, NavItem,NavDropdown, MenuItem } from 'react-bootstrap';


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
                <NavItem eventKey={2} href="#">
                <Link to='/data'> Data</Link>
                </NavItem>
                <NavDropdown eventKey={3} title="Solutions" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Link Right
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link Right
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        </header>


        <main>
          <Route exact path="/" component={Home} />
          <Route path="/data" component={Data} />
        </main>

      </div>


    );
  }
}

export default App;
