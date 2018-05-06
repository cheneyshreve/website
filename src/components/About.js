import React, { Component } from 'react';
import { Media, PageHeader, Image,Grid, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';

class About extends Component {
  render() {
    return (
  <div>
    <Navbar />
    <Jumbotron title="About" subtitle="TKC Solutions." />

     <div className="container">

        <PageHeader className="aboutPageHeader">
          Evidence informed decision making. <small>Innovative Solutions.</small>
         </PageHeader>

         <h2>About us.</h2>
         <p>Awesome details will go here!</p>

      </div>
  <Footer/>
  </div>
    );
  }
}


export default About;
