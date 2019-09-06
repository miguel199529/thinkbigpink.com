import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import ImagenP from './../../Assets/img/LogotipoGirasolo.svg';
import './../../Style/Proyect1.css';
class Proyect1 extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className=" row center card-top">
          <div>
            <div className="card card-with polaroid card-heigth">
              <Image
                src={ImagenP}
                className="card-width"
              />
              <p>comming soon</p>
              <div className="card-body card-borde polaroid">
                <p className="card-text  texto card-name">Nombre del Proyecto</p>
                <p className="card-text  texto card-type">Tipo de Proyecto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Proyect1;
