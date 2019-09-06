import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Imagens from './../../Assets/img/about/im.png';
import './../../Assets/fonts/Hack-Regular.ttf';
import './../../Style/AboutWork.css';
class aboutWork extends Component {
  render() {
    return (
      <div className="container-fluid about-work-top">
        <div className="row about-work-top">
          <div className="col-md-4 aboutwork-texto abou-work-ipad about-work-paddings">
            <div className="about-work-div">
            </div>
            <div className="about-work-div-blue">
            </div>
            <div className="about-work-div-yellow">
            </div>
            <Image src={Imagens} className="aboutwork-img about-work-imagn-prin about-work-paddings"></Image>
            <p className="texto about-work-text">How we work:</p>
            <div className="aboutwork-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutwork-lis texto about-work-text">
              <li>* We analyze and understand the processes of the users.</li>
              <li>* We propose technologies and architecture.</li>
              <li>* We plan deliveries under agile methodologies.</li>
              <li>* We run the project together developers and designers.</li>
            </ul>
          </div>
          <div className="col-md-8 abou-work-ipad about-work-imagen about-work-paddings">
            <Image src={Imagens} className="aboutwork-img abou-work-ipad about-work-paddings"></Image>
          </div>
          <div className="about-work-ipad">
            <Image src={Imagens} className="aboutwork-img about-work-paddings"></Image>
            <p className="texto about-work-text">What we Offer:</p>
            <div className="aboutwork-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutwork-lis texto">
              <li>* We analyze and understand the processes of the users.</li>
              <li>* We propose technologies and architecture.</li>
              <li>* We plan deliveries under agile methodologies.</li>
              <li>* We run the project together developers and designers.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default aboutWork;

