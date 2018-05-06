import React, { Component } from 'react';
import { Media, PageHeader, Image,Grid, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';

class Blog extends Component {
  render() {
    return (
  <div>
    <Navbar />
    <Jumbotron title="Blog" subtitle="Things we care about. Stories to share." />

     <div className="container">

         <h2>Welcome</h2>
         <p>Get the right data for your project.</p>
         <p>Real-time, historical, or blended.</p>

      </div>
  <Footer/>
  </div>
    );
  }
}


export default Blog;
