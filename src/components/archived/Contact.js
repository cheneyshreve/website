import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import Jumbotron from './Jumbotron.js';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
  <div>
    <NavBar />
    <Jumbotron title="Contact Us" subtitle="Reach out. Get in touch." />

     <div classNameName="container-fluid">
  </div>

    <br/>

    <h4 className="contact"><strong>Email</strong></h4>
    <svg className="octicon octicon-mail" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path></svg>
    <a className="u-email" href="mailto:cheney.shreve@gmail.com">cheney.shreve@gmail.com</a>

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


export default Contact;
