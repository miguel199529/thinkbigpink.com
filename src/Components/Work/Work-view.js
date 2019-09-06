import React, { Component } from 'react';
import './../../Assets/fonts/Hack-Regular.ttf';
import Proyect1 from './Proyect';
import Proyect2 from './Proyect2';
import Proyect3 from './Proyect3';
import './../../Style/Proyect1.css';
class WorkView extends Component {
  render() {
    return (
      <div className="container-fluid">
        <di className="row">
          <div className="col-md-4 card-margin">
            <Proyect1></Proyect1>
          </div>
          <div className="col-md-4 card-margin">
            <Proyect2></Proyect2>
          </div>
          <div className="col-md-4 card-margin">
            <Proyect3></Proyect3>
          </div>
        </di>
      </div>
    );
  }
}
export default WorkView;
