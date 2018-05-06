import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Data from './components/Data.js';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Contact from './components/Contact.js';



class App extends Component {
  render() {
    return (
    <Router>
     <div>
       <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/data' component={Data}/>
       <Route path='/blog' component={Blog}/>
       <Route path='/contact' component={Contact}/>
     </div>
    </Router>



    );
  }
}

export default App;
