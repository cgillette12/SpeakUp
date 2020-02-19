/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "./App.scss";
import Services from '../src/services'
import {Link} from "react-router-dom";
const logo = require('../src/assets/img/LOGO.png')

export class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    const { open } = this.state;
    if (open) {
      return <Services />
    }
    return (
      <div >
        <header >
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: 'white', height: 60 }}>
            <a className="navbar-brand" style={{ color: 'black' }} href="/">
              <img src={logo} alt="" style={{ height: 60, width: 'auto' }} /></a>
          </nav>
        </header>
        <div id='fullscreen-container' className="  mt-5 vh-100 align-middle ">
          <div style={{ display: 'flex', justifyContent: 'center', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className='text-white' style={{ fontSize: 25, fontFamily: 'monospace', paddingTop: '15%' }} >
              <h1> Welcome!</h1>
              <p style={{ padding: "0 50px 10px 50px" }}>At Speak Up we believe that communication is more than verbal expression. We take the time
              to get to know your child and create a session that is meaningful to both the parent and child to
              promote communication as a whole. We expect full parent participation in each session to
            maximize the benefits. We can wait to me you and your child!</p>
              <Link className="btn btn-primary btn-lg" to="/service">Get to know us</Link>
            </div>
          </div>
        </div>
        <footer className="pt-4 bg-dark">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Parent Resources</h5>
                <ul id='links' className="list-unstyled" style={{ textDecoration: 'none' }}>
                  <li>
                    <a href="https://www.asha.org/public/speech/development/Speech-and-Language/">Speech andLanguage</a>
                  </li>
                  <li>
                    <a href="https://www.asha.org/public/Early-Identification-of-Speech-Language-and-Hearing-Disorders/">Early-Identification</a>
                  </li>
                  <li>
                    <a href="https://www.asha.org/public/speech/development/chart/">Chart</a>
                  </li>
                  <li>
                    <a href="https://www.asha.org/public/speech/development/communicationdevelopment/">Communication Development</a>
                  </li>
                  <li>
                    <a href="https://www.asha.org/public/speech/disorders/Late-Blooming-or-Language-Problem/">Late-Blooming or Language Problem</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us:</h5>
                <ul className="list-unstyled">
                  <li>
                    Alyssa Chapman
                </li>
                  <li>
                    <a href="mailto:Alyssa.chapman@enmu.edu">Alyssa.chapman@enmu.edu</a>
                  </li>
                  <li>
                    (916) 588-4578
                </li>
                  <li>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright:
          </div>
          </div>
        </footer>
      </div >
    );
  }
}

export default Home;