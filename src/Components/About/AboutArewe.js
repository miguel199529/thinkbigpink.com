import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Imagens from './../../Assets/img/about/5.png';
import './../../Assets/fonts/Hack-Regular.ttf';
import './../../Style/AboutArewe.css';
class aboutArewe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row aboutArewe-top">
          <div className="col-md-8 abou-arewe-ipad abouAreWe-paddings">
            <Image src={Imagens} className="aboutarewe-img abouAreWe-paddings"></Image>
          </div>
          <div className="col-md-4 aboutarewe-texto abou-arewe-ipad">
            <div className="about-arewe-div">
            </div>
            <div className="about-arewe-div-blue">
            </div>
            <div className="about-arewe-div-yellow">
            </div>
            <p className="texto about-arewe-text">Who are we:</p>
            <div className="aboutarewe-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutarewe-lis texto about-arewe-text">
              <li>* Founded in 2015.</li>
              <li>* Based in Pacueco Mx.</li>
              <li>* Developers, strategists and digital artists.</li>
              <li>* Projects in Mexico, Japan, and US.</li>
            </ul>
          </div>
          <div className="about-arewe-ipad">
            <Image src={Imagens} className="aboutarewe-img"></Image>
            <p className="texto about-arewe-text">Who are we:</p>
            <div className="aboutarewe-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutarewe-lis texto">
              <li>* Founded in 2015.</li>
              <li>* Based in Pacueco Mx.</li>
              <li>* Developers, strategists and digital artists.</li>
              <li>* Projects in Mexico, Japan, and US.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default aboutArewe;

