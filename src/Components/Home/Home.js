import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import BigPink from './../../Assets/img/home/LogotipoOficial.svg';
import './../../Style/Home.css';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';
class home extends Component {
  render() {
    let { t } = this.props;
    return (
      <div className=" container-fluid main-background girasolo-index">
        <div className=" row center">
          <div className="col-md-12 center main-logo">
            <Image
              src={BigPink}
              className="main-logotype"
            />
          </div>
        </div>
        <div className="row main-translator">
          <span className="texto">&#60;<span><i>&quot;<a href="/es" className="maincolor">{t('home')}</a>&quot;</i></span>&#62;</span>
        </div>
      </div>
    );
  }
}
home.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  home: PropTypes.string,
};
export default translate('home')(home);
