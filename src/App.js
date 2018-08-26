import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './components/About.js'
import Portfolio from './components/Portfolio.js'


class App extends Component {
  render() {
    return (
    <Router>
     <div>
       <Route path='/about' component={About} />
       <Route path='/portfolio' component={Portfolio} />
     </div>
    </Router>
    );
  }
}

export default App;
