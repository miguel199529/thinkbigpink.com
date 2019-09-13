import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Imagens from './../../Assets/img/about/5.png';
import './../../Assets/fonts/Hack-Regular.ttf';
import './../../Style/AboutArewe.css';
import { translate } from 'react-translate';
import PropTypes from 'prop-types';
class aboutArewe extends Component {
  render() {
    let { t } = this.props;
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
            <p className="texto about-arewe-text">{t('aboutarewetitle')}</p>
            <div className="aboutarewe-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutarewe-lis texto about-arewe-text">
              <li>*{t('areweul1')} </li>
              <li>* {t('areweul2')}</li>
              <li>* {t('areweul3')}</li>
              <li>* {t('areweul4')}</li>
            </ul>
          </div>
          <div className="about-arewe-ipad">
            <Image src={Imagens} className="aboutarewe-img"></Image>
            <p className="texto about-arewe-text">{t('aboutarewetitle')}</p>
            <div className="aboutarewe-colors">
              <div className="div1"> </div>
              <div className="div2"> </div>
              <div className="div3"> </div>
              <div className="div4"> </div>
            </div>
            <ul className="aboutarewe-lis texto">
              <li>* {t('areweul1')}  </li>
              <li>* {t('areweul2')} </li>
              <li>* {t('areweul3')} </li>
              <li>* {t('areweul4')} </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
aboutArewe.propTypes = {
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  aboutarewetitle: PropTypes.string,
  areweul1: PropTypes.string,
  areweul2: PropTypes.string,
  areweul3: PropTypes.string,
  areweul4: PropTypes.string,
};
export default translate('aboutArewe')(aboutArewe);

