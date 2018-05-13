import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import './Drones.css';

class Drones extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Drones" subtitle="Higher quality images. Rapid response." />
     <div className="container">

     <h1>Image acquisition and analysis using drone technology: Hazard mapping potential</h1>
      <h4>Written by: Tarka Wilcox, 12 May 2018</h4>
     <br />


      <br />
      <br />

      <p><strong>Works Cited</strong></p>

      <br />
      <br />
      <br />
     </div>
     <Footer/>
  </div>
    );
  }
}


export default Drones;
