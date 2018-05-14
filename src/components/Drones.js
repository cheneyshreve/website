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

     <h1>Mapping landslide hazards with drone technology</h1>
     <br />


     <iframe title="dronevid" src="https://player.vimeo.com/video/234411476?title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
     <p><a href="https://vimeo.com/234411476">Tarka Wilcox Summer Research: Locating landslide hazards in Western Washington</a> from <a href="https://vimeo.com/pacificlutheran">Pacific Lutheran University</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

      <br />
      <br />

     </div>
     <Footer/>
  </div>
    );
  }
}


export default Drones;
