import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import WorldMap from './WorldMap.js';

class About extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="About" subtitle="Earth Data Innovations | EDI " />

     <div className="container">
        <PageHeader className="aboutPageHeader">
          Where we work.
         </PageHeader>


      <div className="container-fluid"/>
        <div className="row">
          <div className="col-lg-3">
           <p className='media-body'>
             EDI is a team of scientists with expertise in geosciences, remote sensing/GIS, and software development. We specialize in mapping and analysis of environmental hazards using the latest technologies.
             </p>

          <p><strong>Scientific Publications</strong></p>
          <p><a href="https://scholar.google.com/citations?user=hmqANfIAAAAJ&hl=en&oi=ao" ><strong>Environmental Sciences</strong></a></p>
          <p><a href="https://scholar.google.com/citations?user=NwK1DwwAAAAJ&hl=en&oi=ao" ><strong>Geosciences</strong></a></p>

          <br />

          </div>
        <div className="col-lg-4">
            <WorldMap />
        </div>
      </div>

      </div>

      <aside id="sticky-social">
          <ul>
              <li><a href="https://twitter.com/cmshreve01" className="entypo-twitter" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a></li>
              <li><a href="https://www.linkedin.com/in/cheney-shreve-982a9512/" className="entypo-linkedin" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a></li>
              <li><a href="https://github.com/cheneyshreve" className="entypo-github" target="_blank" rel="noopener noreferrer"><span>GitHub</span></a></li>
          </ul>
      </aside>
  <Footer/>
  </div>
    );
  }
}


export default About;
