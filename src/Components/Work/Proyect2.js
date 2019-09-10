import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import ImagenP from './../../Assets/img/work/work.png';
import './../../Style/Proyect1.css';
class Proyect2 extends Component {
  render() {
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
export default Proyect2;
