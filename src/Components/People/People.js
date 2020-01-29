import React, { Component } from 'react';
import './../../Style/Home.css';
import Personajes from './Personajes';
import './../../Style/Personajes.css';
import PropTypes from 'prop-types';

const People_andy = ('assets/img/People/andy.jpg');
const People_abel = ('assets/img/People/Abelito.jpg');
const People_edgar = ('assets/img/People/edgar.jpg');
const People_lopm = ('assets/img/People/lomp.jpg');
const People_chen = ('assets/img/People/chen.jpg');
const People_nancy = ('assets/img/People/nancy.jpg');
const People_cecy = ('assets/img/People/cecy.jpg');
const People_leo = ('assets/img/People/leo.jpg');
const People_lalo = ('assets/img/People/lalo.jpg');
class People extends Component {


  render() {

    return (
      <div className="container-fluid people-top" id="People">
        <div className="row">
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_andy}>
            </Personajes>
          </div>
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_abel}>
            </Personajes>
          </div>
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_edgar}>
            </Personajes>
          </div>
        </div>
        <div className="row team-top">
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_lopm}>
            </Personajes>
          </div>
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_chen}>
            </Personajes>
          </div>
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_nancy}>
            </Personajes>
          </div>
        </div>
        <div className="row team-top">
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_cecy}>
            </Personajes>
          </div>
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_leo}>
            </Personajes>
          </div>
          <div className="col-md-4 people-margin">
            <Personajes personaje={People_lalo}>
            </Personajes>
          </div>
        </div>
      </div>
    );
  }
}
People.propTypes = {
  name: PropTypes.string,
  personaje: PropTypes.string,
  People_andy: PropTypes.string,
  People_abel: PropTypes.string,
  People_edgar: PropTypes.string,
  People_lopm: PropTypes.string,
  People_chen: PropTypes.string,
  People_nancy: PropTypes.string,
  People_cecy: PropTypes.string,
  People_leo: PropTypes.string,
  People_lalo: PropTypes.string,
};
export default People;
