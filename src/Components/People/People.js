import React, { Component } from 'react';
import './../../Style/Home.css';
import Andrea from './Andrea';
import Chen from './Chen';
import Eduardo from './Eduardo';
import Leyva from './Leyva';
import Abel from './Abel';
import Christian from './Christian';
import Cecilia from './Cecilia';
import Leonardo from './Leonardo';
import Nancy from './Nancy';
import './../../Style/Personajes.css';
class People extends Component {
  render() {
    return (
      <div className="container-fluid people-top" id="People">
        <div className="row">
          <div className="col-md-4 people-margin">
            <Andrea></Andrea>
          </div>
          <div className="col-md-4 people-margin">
            <Chen></Chen>
          </div>
          <div className="col-md-4 people-margin">
            <Eduardo></Eduardo>
          </div>
        </div>
        <div className="row team-top">
          <div className="col-md-4 people-margin">
            <Leyva></Leyva>
          </div>
          <div className="col-md-4 people-margin">
            <Abel></Abel>
          </div>
          <div className="col-md-4 people-margin">
            <Christian></Christian>
          </div>
        </div>
        <div className="row team-top">
          <div className="col-md-4 people-margin">
            <Cecilia></Cecilia>
          </div>
          <div className="col-md-4 people-margin">
            <Leonardo></Leonardo>
          </div>
          <div className="col-md-4 people-margin">
            <Nancy></Nancy>
          </div>
        </div>
      </div>
    );
  }
}
export default People;
