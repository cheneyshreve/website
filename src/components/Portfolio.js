import React, { Component } from 'react'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Jumbotron from './Jumbotron.js'
import './Portfolio.css'
import './Contact.css'
import wiki from './../images/wiki.png'
import geochef from './../images/geochef.png'
import metrics from './../images/metrics.png'
import bookmarks from './../images/bookmarks.png'
import todolist from './../images/todolist.png'



class Portfolio extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Recent Projects" />
    <div className="container-fluid" />

  <div classname="container">
      <div className="col-md-6">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={wiki} />
          <div className="card-body">
            <p className="card-text">Social Wiki | Social wikipedia app that enables users create and share public wikis, or apply for a private subscription, with Markdown enabled editors.</p>
              <div className="btn-group">
                 <a href="https://immense-ocean-13499.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
              </div>
           </div>
          </div>
        </div>

    <div className="col-md-6">
      <div className="card md-6 box-shadow">
        <img className="card-img-top" src={geochef} />
        <div className="card-body">
          <p className="card-text">Food & Travel Blog | Website I built as a demo for pairing custom Alexa recipe skill with food-blogging site.</p>
            <div className="btn-group">
               <a href="http://geo-chef.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
            </div>
         </div>
        </div>
      </div>

    <div className="col-md-6">
      <div className="card mb-4 box-shadow">
        <img className="card-img-top" src={bookmarks} />
        <div className="card-body">
          <p className="card-text">Social Bookmarking App | Enables users to create, edit, and manage public and private bookmarks.</p>
            <div className="btn-group">
               <a href="https://fierce-peak-50187.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
            </div>
         </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={metrics} />
          <div className="card-body">
            <p className="card-text">Analytics Tracker | Client-side JavaScript enables event tracking on websites. Server-side API captures & stores events to a database.</p>
              <div className="btn-group">
                 <a href="https://stark-forest-69447.herokuapp.com/users/sign_in/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
              </div>
           </div>
          </div>
        </div>
    </div>

      <div className="col-md-6">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" src={todolist} />
          <div className="card-body">
            <p className="card-text">To-Do Manager | To-dos display by date created and automatically delete after 7-days.</p>
              <div className="btn-group">
                 <a href="https://morning-thicket-71470.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary">View</a>
              </div>
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


export default Portfolio
