import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import './Blog.css';
import nasa_thumbnail from '../images/nasa_thumbnail.jpg'
import drone_thumbnail from '../images/drone_thumbnail.jpg'

class Blog extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Blog" subtitle="Things we care about. Stories to share." />

     <div className="container">

     <div className="row mb-2">
             <div className="col-md-6">
               <div className="card flex-md-row mb-4 box-shadow h-md-250">
                 <div className="card-body d-flex flex-column align-items-start">
                   <strong className="d-inline-block mb-2 text-primary">Social & Environmental Sciences</strong>
                   <h3 className="mb-0">
                     <a className="text-dark">Gender & Disasters</a>
                   </h3>
                   <div className="mb-1 text-muted">May 2018</div>
                   <p className="card-text mb-auto">Why disaggregated data collection matters for disasters.</p>
                   <a href="/gender">Continue reading</a>
                 </div>
                 <img alt="" className="thumbnailImage" src={nasa_thumbnail} />
               </div>
             </div>
           </div>

           <div className="row mb-2">
                   <div className="col-md-6">
                     <div className="card flex-md-row mb-4 box-shadow h-md-250">
                       <div className="card-body d-flex flex-column align-items-start">
                         <strong className="d-inline-block mb-2 text-primary">Geosciences</strong>
                         <h3 className="mb-0">
                           <a className="text-dark">Drones & Hazard Mapping</a>
                         </h3>
                         <div className="mb-1 text-muted">May 2018</div>
                         <p className="card-text mb-auto">Using drones to create better hazards maps.</p>
                         <a href="/drones">Continue reading</a>
                       </div>
                        <img className="thumbnailImage" alt="" src={drone_thumbnail} data-holder-rendered="true"/>
                     </div>
                   </div>
                 </div>
           </div>
        <br />
        <br />
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


export default Blog;
