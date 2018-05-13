import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';

class Services extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Data" subtitle="Put it to work for you." />

     <div className="container-fluid">

        <PageHeader className="homePageHeader">
          Data collection & Analysis. <small>Building connectivity.</small>
         </PageHeader>

      <div>
         <h4>Data acquisition & analysis</h4>
         <p>Drone specs will go here.</p>
         <p>Geomorphology & field assessments.</p>
         <p>GIS services will go here.</p>
         <p>Report writing details will go here.</p>
         <p>Speaking & training details will go here.</p>
         <br />
      </div>

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


export default Services;
