import React, { Component } from 'react';
import './../../Assets/fonts/Hack-Regular.ttf';
import Proyect1 from './Proyect';
import './../../Style/Proyect1.css';
import PropTypes from 'prop-types';
import { translate } from 'react-translate';


class WorkView extends Component {
  render() {
    const proyectosDadbox = ('assets/img/work/work.png');
    const proyectosEnarm = ('assets/img/work/work.png');
    const proyectosLMS = ('assets/img/work/work.png');
    return (
      <div className="container-fluid work-top" id="Work">
        <div className="row">
          <div className="col-md-4 card-margin">
            <Proyect1 proyect={proyectosDadbox}></Proyect1>
          </div>
          <div className="col-md-4 card-margin">
            <Proyect1 proyect={proyectosEnarm}></Proyect1>
          </div>
          <div className="col-md-4 card-margin">
            <Proyect1 proyect={proyectosLMS }></Proyect1>
          </div>
        </div>
      </div>
    );
  }
}
WorkView.propTypes = {
  name: PropTypes.string,
  proyectosDadbox: PropTypes.string,
  proyectosEnarm: PropTypes.string,
  proyectosLMS: PropTypes.string,
  proyect: PropTypes.string,
};
export default translate('commingsoon')(WorkView);
