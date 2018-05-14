import React, { Component } from 'react';
import './Footer.css';


class Footer extends Component {
  render (){
    return (

      <footer className="footer">
        <div className="container">
          <span className="text-muted">Earth Data Innovations | EDI &#169; {new Date().getFullYear()}</span>
        </div>
      </footer>

    );
  }



};

export default Footer;
