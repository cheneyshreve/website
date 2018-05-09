import React, { Component } from 'react';
import { Media, PageHeader, Image,Grid, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import WorldMap from './WorldMap.js';

class About extends Component {
  render() {
    return (
  <div>
    <Navbar />
    <Jumbotron title="About" subtitle="TKC Solutions." />

     <div className="container">
        <PageHeader className="aboutPageHeader">
          Where we work.
         </PageHeader>

      <div className="container-fluid"/>
        <div className="row">
          <div className="col-lg-3">
           <p className='media-body'>
             About text to be added here.
             </p>
          </div>
        <div className="col-lg-4">
            <WorldMap />
        </div>
      </div>

      </div>
  <Footer/>
  </div>
    );
  }
}


export default About;
