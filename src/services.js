import React, {Component} from 'react';
const logo = require('../src/assets/img/LOGO.png')

export  class Services extends Component{
  render(){
    return(
      <div >
        <header >
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark" style={{ backgroundColor: 'white', height: 50 }}>
            <a className="navbar-brand" style={{ color: 'black' }} href="/">
              <img src={logo} alt="" style={{ height: 50, width: 'auto' }} /></a>
          </nav>
        </header>
        <div id='services' className="  mt-5 vh-100 align-middle " style={{paddingTop:'5%'}}>
        <div className=" p-5" style={{ display: 'flex', justifyContent: 'center' , }}>
            <div className="card p-5" style={{ backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="card-body text-white">
              <div className="row ">
                <div className="col">
                  <h2>Interventions:</h2>
                  <ul className="list-unstyled" style={{fontSize:20}}>
                    <li>Articulation Intervention</li>
                    <li>Expressive Language Intervention</li>
                    <li>Receptive Language Intervention</li>
                    <li>Social Language Intervention</li>
                  </ul>
                  <h2>Evaluation &amp; Testing:</h2>
                  <ul className="list-unstyled" style={{fontSize:20}}>
                    <li>Articulation Intervention</li>
                    <li>Expressive Language Intervention</li>
                    <li>Receptive Language Intervention</li>
                    <li>Social Language Intervention</li>
                  </ul>
                </div>
                <div className="col">
                  <h3>Populations Served:</h3>
                  <ul className="list-unstyled" style={{fontSize:20}}>
                    <li>12+ months</li>
                  </ul>
                  <h3>Payments Accepted:</h3>
                  <ul className="list-unstyled" style={{fontSize:20}}>
                    <li>Private Pay</li>
                    <li> Cash, Mastercard or Visa</li>
                  </ul>
                  <h3>Insurance Accepted:</h3>
                  <ul className="list-unstyled" style={{fontSize:20}}>
                    <li> Kaiser Permanente</li>
                  </ul>
                  <h3>Scheduling:</h3>
                    <ul className="list-unstyled" style={{ fontSize: 20 }}>
                    <li>Contact us to check for availabilities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="pt-4 bg-dark">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            </div>
            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Extra Info</h5>
              <ul id='links'className="list-unstyled" style={{textDecoration:'none'}}>
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
    )
  }
}
export default Services;