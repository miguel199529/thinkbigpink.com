import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import Imagens from './../../Assets/img/about/2.png';
import PropTypes from 'prop-types';
import './../../Style/AboutDevelop.css';
import {translate} from 'react-translate';

class aboutdevelop extends Component {

  render() {
    let { t } = this.props;

    return (
      <div>
        <div className="container-fluid center aboutDevelop margin-tops" id="#/Develop">
          <div className="row">
            <div className="col-md-4 aboutDevelop-main aboutDevelop-main-spacing-row aboutDevelop-bordeer">
              <p className="aboutDevelop-main-spacing aboutDevelop-main-spacing-text texto">{t('title')}
              </p>
              <div className="about-barra about-barra-display">
                <div className="row about-box-color-movil about-divs-pink">
                </div>
                <div className="row about-box-color-movil about-divs-yelow">
                </div>
                <div className="row about-box-color-movil about-divs-blue">
                </div>
                <div className="row about-box-color-movil about-divs-black">
                </div>
              </div>
              <p className="aboutDevelop-main-wedevelop texto about-divs-margins about-text ">{t('titleAbout')}<span className="parpadea"> &#124;</span></p>
              <div className="about-barra about-barra-ipad">
                <div className="row about-box-color-movil about-divs-pink">
                </div>
                <div className="row about-box-color-movil about-divs-yelow">
                </div>
                <div className="row about-box-color-movil about-divs-blue">
                </div>
                <div className="row about-box-color-movil about-divs-black">
                </div>
              </div>
              <div className="row about-row-colors">
                <div className="about-divs-colors">
                </div>
                <div className="about-divs1-colors">
                </div>
              </div>
              <Image src={Imagens}
                className="aboutDevelop-Imagen about-imagen">
              </Image>
              <div className="texto aboutDevelop-main-branding tablet">
                <div className="about-box-pink about-imgn"></div>
                <div className="about-box-blue about-imgn"></div>
                <div className="divscolores">
                </div>
                <div className="divs-amarillo"></div>
                <h2 className="aboutDevelop-main-branding-born tablet">&frasl;&frasl;{t('contentAboutDevelop')} &nbsp; </h2>
                {t('aboutcontent')}

              </div>
              <p className="texto about-main-sectors tablet">
                {t('aboutcontentproyects')}
              </p>
              <div className="divs-azul tablet"></div>
              <p className="texto about-main-sectors about-box-color-row tablet">
                Think BIG, Think BigPink.
              </p>
              <div className="row about-box-color about-imgn">
                <div className="about-box-colors-pink tablets"></div>
                <div className="about-box-colors-yellow tablets"></div>
                <div className="about-box-colors-blue tablets"></div>
                <div className="about-box-colors-black tablets"></div>
              </div>
            </div>
            <div className="txts texto">
              <div className="divscolores">
              </div>
              <div className="divs-amarillo"></div>
              <p className="texto about-main-sectors about-selector about-branding ">
              &frasl;{t('contentAboutDevelop')}&nbsp;
              </p>
              <p className="texto about-main-sectors about-have-selector">
                {t('aboutcontentproyects')}
              </p>
              <p className="texto about-main-sectors ">
                {t('aboutcontent')}
              </p>
              <p className="texto about-main-sectors">
                {t('aboutcontentproyects')}
              </p>
              <div className="divs-azul"></div>
              <p className="texto about-main-sectors about-bigpink">
                Think BIG, Think BigPink.
              </p>
            </div>
            <div className="col-md-8 about-main-ipad ">
              <Image src={Imagens}
                className="about-imgn about-img">
              </Image>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
aboutdevelop.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  titleAbout: PropTypes.string,
  contentAboutDevelop: PropTypes.string,
  aboutcontent: PropTypes.string,
  aboutcontentproyects: PropTypes.string,
};
export default translate('about')(aboutdevelop);

