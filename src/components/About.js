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

         <WorldMap />



      </div>
  <Footer/>
  </div>
    );
  }
}


export default About;
