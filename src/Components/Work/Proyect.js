import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import './../../Style/Proyect1.css';
import { translate } from 'react-translate';
import PropTypes from 'prop-types';
class Proyect1 extends Component {
  render() {
    let  traductor  = this.props.t;
    return (
      <div className=" container-fluid">
        <div className=" row center card-top">
          <div>
            <div className="card card-with polaroid card-heigth">
              <Image src={this.props.proyect} className="card-width"
              />
              <div className="card-body card-borde polaroid">
                <p className="card-text  texto card-name">{traductor('cominsoontitle')}</p>
                <p className="card-text  texto card-type">{traductor('type')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Proyect1.propTypes = {
  t: PropTypes.func.isRequired,
  name: PropTypes.string,
  cominsoontitle: PropTypes.string,
  type: PropTypes.string,
  proyect: PropTypes.string,

};
export default translate('commingsoon')(Proyect1);
