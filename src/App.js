import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js';
import Services from './components/Services.js';
import About from './components/About.js';
import Blog from './components/Blog.js';
import Gender from './components/Gender.js';
import Drones from './components/Drones.js';
import Contact from './components/Contact.js';



class App extends Component {
  render() {
    return (
    <Router>
     <div>
       <Route exact path='/' component={Home}/>
       <Route path='/about' component={About}/>
       <Route path='/services' component={Services}/>
       <Route path='/contact' component={Contact}/>
       <Route path='/blog' component={Blog}/>
       <Route path='/gender' component={Gender}/>
       <Route path='/drones' component={Drones}/>
     </div>
    </Router>



    );
  }
}

export default App;
