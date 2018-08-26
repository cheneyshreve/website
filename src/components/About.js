import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './Contact.css'
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import WorldMap from './WorldMap.js';

class About extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="About Me" />
     <div className="container">
      <div className="container-fluid"/>
      <div className="row">
       <div className="media">
        <p>Software Developer/Data Scientist with a Ph.D. in Environmental Sciences with a Remote Sensing specialization. 10-yrs of experience in the area of data analytics to address social/environmental challenges. Recently attained skills in Ruby-on-Rails, React, Ruby, JavaScript, HTML/CSS, SQL, Postgres, Heroku, Git & GitHub technologies with ongoing open source contributions to impact-driven causes. Prior experience with R for data preprocessing, scripting, and basic statistical analysis. Strong OOP skills, data structures and algorithms, test-driven development, and excellent communication skills.</p>
       </div>
      </div>

          <div className="col-lg-3">
          <p><a href="https://scholar.google.com/citations?user=hmqANfIAAAAJ&hl=en&oi=ao" ><strong><p><strong>View my scientific publications</strong></p></strong></a></p>
          <br />


        <div className="col-lg-4">
            <WorldMap />
        </div>
        <aside id="sticky-social">
            <ul>
                <li><a href="https://twitter.com/cmshreve01" className="entypo-twitter" target="_blank" rel="noopener noreferrer"><span>Twitter</span></a></li>
                <li><a href="https://www.linkedin.com/in/cheney-shreve-982a9512/" className="entypo-linkedin" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span></a></li>
                <li><a href="https://github.com/cheneyshreve" className="entypo-github" target="_blank" rel="noopener noreferrer"><span>GitHub</span></a></li>
            </ul>
        </aside>
      </div>
    </div>

  <Footer/>
  </div>
    );
  }
}


export default About;
