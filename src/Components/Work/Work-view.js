import React, { Component } from 'react';
import './../../Assets/fonts/Hack-Regular.ttf';
import Proyect1 from './Proyect';
import Proyect2 from './Proyect2';
import Proyect3 from './Proyect3';
import './../../Style/Proyect1.css';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';
class WorkView extends Component {

  render() {
    return (
      <div className="container-fluid work-top" id="Work">
        <div className="row">
          <div className="col-md-4 card-margin">
            <Proyect1 name={this.props.name}></Proyect1>
          </div>
          <div className="col-md-4 card-margin">
            <Proyect2 name={this.props.name}></Proyect2>
          </div>
          <div className="col-md-4 card-margin">
            <Proyect3 name={this.props.name}></Proyect3>
          </div>
        </div>
      </div>
    );
  }
}
WorkView.propTypes={
  name: PropTypes.string,
  name1: PropTypes.string,
};
export default translate('commingsoon') (WorkView);
