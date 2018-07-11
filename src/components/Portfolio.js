import React, { Component } from 'react'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Jumbotron from './Jumbotron.js'
import './Portfolio.css'
import wiki from './../images/wiki.png'
import metrics from './../images/metrics.png'
import bookmarks from './../images/bookmarks.png'


class Portfolio extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Projects" />
    <div className="container-fluid" />

  <div classname="container">
  <div className="col-md-4">
    <div className="card mb-4 box-shadow">
      <img className="card-img-top" src={wiki} />
      <div className="card-body">
        <p className="card-text">Social Wiki App</p>
          <div className="btn-group">
             <a href="https://immense-ocean-13499.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
          </div>
       </div>
      </div>
    </div>

    <div className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top" src={metrics} />
        <div className="card-body">
          <p className="card-text">Analytics Tracker</p>
            <div className="btn-group">
               <a href="https://stark-forest-69447.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
            </div>
         </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={bookmarks} />
          <div className="card-body">
            <p className="card-text">Social Bookmarking App</p>
              <div className="btn-group">
                 <a href="https://fierce-peak-50187.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
              </div>
           </div>
          </div>
        </div>
    </div>

     <Footer/>
  </div>
    );
  }
}


export default Portfolio
