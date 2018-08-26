import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import './Services.css';

class Services extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Data" subtitle="Put it to work for you." />

     <div className="container-fluid">

    <div>
        <h4>Data Services</h4>
        <br/>
        <p><strong>Data collection</strong>: High resolution imagery can be difficult or expensive to obtain. Moderate to high resolution optical satellite imagery is suited for providing a baseline map, but it often leaves unresolvable data gaps due to cloud cover or sensor failures. Drones have emerged as a viable, lower cost solution to for obtaining high resolution images apprporiate for mapping land cover features and terrain. We offer image collection and analysis using the latest drone technologies.</p>
        <br />

        <p><strong>Data analysis</strong>: Finding and analyzing the relevant ancillary datasets for your project can be a duanting task; there are hundreds of data repositories and search engines to choose from. We offer basic geographic information services (GIS) to find, process, organize, and analyze social and environmental datasets.</p>
        <br />

        <p><strong>Other services</strong>: We are available for speaking and training engagements, as well as providing support for authoring technical reports and other communications.</p>
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


export default Services;
