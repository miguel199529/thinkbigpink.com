import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Imagens from './../../Assets/img/about/4.png';
import './../../Assets/fonts/Hack-Regular.ttf';
import './../../Style/AboutWork.css';
import {translate} from 'react-translate';
import PropTypes from 'prop-types';
class aboutWork extends Component {
  render() {
    let  traductor  = this.props.t;
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
            <p className="texto about-work-text">{traductor('worktitle')}</p>
            <div className="aboutwork-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutwork-lis texto about-work-text">
              <li>* {traductor('workul1')}</li>
              <li>* {traductor('workul2')}</li>
              <li>* {traductor('workul3')}</li>
              <li>* {traductor('workul4')}</li>
            </ul>
          </div>
          <div className="col-md-8 abou-work-ipad about-work-imagen about-work-paddings">
            <Image src={Imagens} className="aboutwork-img abou-work-ipad about-work-paddings"></Image>
          </div>
          <div className="about-work-ipad">
            <Image src={Imagens} className="aboutwork-img about-work-paddings"></Image>
            <p className="texto about-work-text">{traductor('worktitle')}</p>
            <div className="aboutwork-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutwork-lis texto">
              <li>* {traductor('workul1')}</li>
              <li>* {traductor('workul2')}</li>
              <li>* {traductor('workul3')}</li>
              <li>* {traductor('workul4')}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
aboutWork.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  worktitle: PropTypes.string,
  workul1: PropTypes.string,
  workul2: PropTypes.string,
  workul3: PropTypes.string,
  workul4: PropTypes.string,
};
export default translate('aboutWork')  (aboutWork);

