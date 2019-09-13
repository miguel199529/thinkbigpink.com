import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import ImagenP from './../../Assets/img/work/work.png';
import './../../Style/Proyect1.css';
import { translate } from 'react-translate';
import PropTypes from 'prop-types';
class Proyect2 extends Component {
  render() {
    let { t } = this.props;
    return (
      <div className=" container-fluid">
        <div className=" row center card-top">
          <div>
            <div className="card card-with polaroid ">
              <Image
                src={ImagenP}
                className="card-width"
              />
              <div className="card-body card-borde polaroid">
                <p className="card-text  texto card-name">{t('cominsoontitle')}</p>
                <p className="card-text  texto card-type">{t('type')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Proyect2.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  name1: PropTypes.string,
  cominsoontitle: PropTypes.string,
  type: PropTypes.string,
};
export default translate('commingsoon')(Proyect2);
