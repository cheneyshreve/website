import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';

class Home extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Welcome" subtitle="What problem shall we solve?" />

     <div className="container">

        <PageHeader className="homePageHeader">
          Evidence informed decision making. <small>Innovative Solutions.</small>
         </PageHeader>

      </div>
      <aside id="sticky-social">
          <ul>
              <li><a href="https://twitter.com/cmshreve01" className="entypo-twitter" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a></li>
              <li><a href="https://www.linkedin.com/in/cheney-shreve-982a9512/" className="entypo-linkedin" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a></li>
              <li><a href="https://github.com/cheneyshreve" className="entypo-github" target="_blank" rel="noopener noreferrer"><span>GitHub</span></a></li>
          </ul>
      </aside>

  <Footer/>
  </div>
    );
  }
}


export default Home;
