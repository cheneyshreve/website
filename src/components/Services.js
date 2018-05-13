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


      </div>
  <Footer/>
  </div>
    );
  }
}


export default Services;
