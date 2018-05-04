import React, { Component } from 'react';
import { Media, PageHeader, Image,Grid, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';

class Home extends Component {
  render() {
    return (
  <div>
    <Navbar />

     <div className="container">

        <PageHeader className="homePageHeader">
          Evidence informed decision making. <small>Big Data. Innovative Solutions.</small>
         </PageHeader>

         <h2>Welcome</h2>
         <p>Get the right data for your project.</p>
         <p>Real-time, historical, or blended.</p>




      </div>
  <Footer/>
  </div>





    );
  }
}


export default Home;
