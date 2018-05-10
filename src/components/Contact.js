import React, { Component } from 'react';
import { Media, PageHeader, Image,Grid, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';

class Contact extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Contact" subtitle="Reach out. Get in touch." />

     <div className="container">

        <PageHeader className="contactPageHeader">
          Evidence informed decision making. <small>Innovative Solutions.</small>
         </PageHeader>



      </div>
  <Footer/>
  </div>
    );
  }
}


export default Contact;
