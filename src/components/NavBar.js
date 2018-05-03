import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Navbar,Nav, NavItem,NavDropdown, MenuItem, PageHeader } from 'react-bootstrap';


class NavBar extends Component {
  render() {
    return (
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
        <Link to='/' className ="hazards">
          <MenuItem eventKey={3.1}>Hazard Assessments</MenuItem>
        </Link>
        <Link to='/' className="analysis">
          <MenuItem eventKey={3.2}>Data Analysis</MenuItem>
        </Link>
        <Link to="/" className="services">
          <MenuItem eventKey={3.3}>Services</MenuItem>
        </Link>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
         Blog
        </NavItem>
        <NavItem eventKey={2} href="#">
          Contact
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
}


}

export default NavBar;
