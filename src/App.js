import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Data from './components/Data.js';
import NavBar from './components/NavBar.js';
import { Navbar,Nav, NavItem,NavDropdown, MenuItem, PageHeader } from 'react-bootstrap';


class App extends Component {
  render() {
    return (

      <div className="App">
       <header>
         <NavBar />
       </header>
        <main>
          <Route exact path="/" component={Home} />
        </main>
      </div>


    );
  }
}

export default App;
