import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import './Blog.css';

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
                   <strong className="d-inline-block mb-2 text-primary">Social & Environmental Equity</strong>
                   <h3 className="mb-0">
                     <a className="text-dark" href="#">Gender & Disaster Mortality</a>
                   </h3>
                   <div className="mb-1 text-muted">May 2018</div>
                   <p className="card-text mb-auto">Blog discussing gender & disaster mortality will go here.</p>
                   <a href="#">Continue reading</a>
                 </div>
                 <img className="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" alt="Hurricane Image" className="thumbnailImage" src={process.env.PUBLIC_URL + '/nasa_thumbnail.jpg'} data-holder-rendered="true"/>
               </div>
             </div>
           </div>

           <div className="row mb-2">
                   <div className="col-md-6">
                     <div className="card flex-md-row mb-4 box-shadow h-md-250">
                       <div className="card-body d-flex flex-column align-items-start">
                         <strong className="d-inline-block mb-2 text-primary">Geosciences</strong>
                         <h3 className="mb-0">
                           <a className="text-dark" href="#">Drones & Hazard Mapping</a>
                         </h3>
                         <div className="mb-1 text-muted">May 2018</div>
                         <p className="card-text mb-auto">Blog about using drones to map hazards will go here.</p>
                         <a href="#">Continue reading</a>
                       </div>
                        <img class="card-img-right flex-auto d-none d-lg-block" data-src="holder.js/200x250?theme=thumb" className="thumbnailImage" alt="Drone image" src={process.env.PUBLIC_URL + '/drone_thumbnail.jpg'} data-holder-rendered="true"/>
                     </div>
                   </div>
                 </div>
           </div>
     <Footer/>
  </div>
    );
  }
}


export default Blog;
