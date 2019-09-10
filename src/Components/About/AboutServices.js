import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Imagens from './../../Assets/img/about/1.png';
import './../../Assets/fonts/Hack-Regular.ttf';
import './../../Style/AboutServices.css';
class aboutServices extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row about-service-top">
          <div className="col-md-8 abou-services-ipad about-services-paddings">
            <Image src={Imagens} className="aboutservices-img"></Image>
          </div>
          <div className="col-md-4 aboutservices-texto abou-services-ipad">
            <div className="about-service-div">
            </div>
            <div className="about-service-div-blue">
            </div>
            <div className="about-service-div-yellow">
            </div>
            <p className="texto about-service-text">What we Offer:</p>
            <div className="aboutservices-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutservice-lis texto about-services-text">
              <li>* Design and development of digital products.</li>
              <li>* UX + UI Consultancy.</li>
              <li>* Digital strategy and consulting.</li>
              <li>* Implementation of digital projects.</li>
            </ul>
          </div>
          <div className="about-services-ipad">
            <Image src={Imagens} className="aboutservices-img"></Image>
            <p className="texto about-service-text">What we Offer:</p>
            <div className="aboutservices-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutservice-lis texto">
              <li>* Design and development of digital products.</li>
              <li>* UX + UI Consultancy.</li>
              <li>* Digital strategy and consulting.</li>
              <li>* Implementation of digital projects.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default aboutServices;

