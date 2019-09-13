import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import girasolo from './../../Assets/img/LogotipoGirasolo.svg';
import './../../Style/Girasolo.css';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';
class Girasolo extends Component {
  render() {
    let { t } = this.props;
    return (
      <div className="container-fluid" id="Girasolo">
        <div className="row wave">
          <div className="col-md-6">
            <span className="girasolo texto">GIRASOLO <span className="parpadea">&#124;</span></span>
            <p className="girasolo-txt  texto"> &nbsp; &nbsp; &nbsp; {t('girasolocont')}</p>
            <p className="girasolo-txto texto">{t('girasoloparrafo2')}</p>
            <p className="girasolo-txto texto">{t('girasoloLink')}</p>
            <div> &#60;<a href="http://www.girasolo.mx/" className="contact-pink girasolo-txto wave-texto"> <i> www.girasolo.com</i></a>&#62;</div>
          </div>
          <div className="col-md-6 col-girasolo">
            <Image src={girasolo} className="girasolo-img"></Image>
          </div>
        </div>
      </div>
    );
  }
}
Girasolo.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  girasolocont: PropTypes.string,
  girasoloparrafo2: PropTypes.string,
  girasoloLink: PropTypes.string

};
export default translate('girasolo')(Girasolo);
