import React from 'react';
import "./App.scss";
const logo = require('../src/assets/img/LOGO.png')

function App() {
  return (
    <div>
      <header >
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{backgroundColor:'white', height: 50}}>
          <a className="navbar-brand" style={{color: 'black'}} href="/">
            <img src={logo }alt="" style={{height: 50, width: 'auto'}} /></a>
        </nav>
      </header>
        <div className="top-images " 
          style={{
          marginTop: 56,
          backgroundSize: '100%'}}
          >
          <div style={{
            display: 'flex',
            color: 'white',
            textAlign: 'center',
            justifyContent: 'center',
            paddingTop: '10%',
            height: '100%',
            backgroundColor: "rgba(0,0,0,0.3)",
          }} >
            <div style={{fontSize: 25 ,fontFamily: 'monospace'}} >
              <h1> Welcome!</h1>
              <p style={{padding: "0 50px 10px 50px"}}>At Speak Up we believe that communication is more than verbal expression. We take the time
              to get to know your child and create a session that is meaningful to both the parent and child to
              promote communication as a whole. We expect full parent participation in each session to
              maximize the benefits. We can wait to me you and your child!</p>
            <a className="btn btn-light btn-lg" href='/services'>Get to know us</a>
            </div>
          </div>
        </div>
        <div className="container mb-5 mt-5 vh-100 align-middle">
          <div className=" p-5" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="card p-5">
              <div className="card-body">
                <div className="row ">
                  <div className="col">
                    <h2>Interventions:</h2>
                    <ul className="list-unstyled">
                      <li>Articulation Intervention</li>
                      <li>Expressive Language Intervention</li>
                      <li>Receptive Language Intervention</li>
                      <li>Social Language Intervention</li>
                    </ul>
                    <h2>Evaluation &amp; Testing:</h2>
                    <ul className="list-unstyled">
                      <li>Articulation Intervention</li>
                      <li>Expressive Language Intervention</li>
                      <li>Receptive Language Intervention</li>
                      <li>Social Language Intervention</li>
                    </ul>
                  </div>
                  <div className="col">
                    <h4>Populations Served:</h4>
                    <ul className="list-unstyled">
                      <li>12+ months</li>
                    </ul>
                    <h4>Payments Accepted:</h4>
                    <ul className="list-unstyled">
                      <li>Private Pay</li>
                      <li> Cash, Mastercard or Visa</li>
                    </ul>
                    <h4>Insurance Accepted:</h4>
                    <ul className="list-unstyled">
                      <li> Kaiser Permanente</li>
                    </ul>
                    <h4>Scheduling:</h4>
                    <ul className="list-unstyled">
                      <li>Contact us to check for availabilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <footer className="pt-4 bg-light">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
          </div>
          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Extra Info</h5>
            <ul className="list-unstyled">
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
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="/"> Some Client</a>
        </div>
       </div>
      </footer>
    </div>
  );
}

export default App;
