import React, { Component } from 'react';
import { Media, PageHeader, Image,Grid, Row, Col } from 'react-bootstrap';
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
