import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import ImagenP from './../Assets/img/LogotipoGirasolo.svg';
import './../Style/Work.css';
class work extends Component {


  render() {
    return (
      <div>
        <div className="container-fluid rowkork">
          <div className="row rowwork rowcen">
            <div className="col-md-4 colr divs ">
              <div className="card cardwith polaroid ">
                <Image
                  src={ImagenP}
                />
                <div className="card-body bor polaroid">
                  <p className="card-text  texto name">Nombre del Proyecto</p>
                  <p className="card-text  texto name1">Tipo del Proyecto</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 colr ">
              <div className="card cardwith polaroid">
                <Image
                  src={ImagenP}
                />
                <div className="card-body bor">
                  <p className="card-text  texto name">Nombre del Proyecto</p>
                  <p className="card-text  texto name1">Tipo del Proyecto</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 colr ">
              <div className="card cardwith polaroid">
                <Image
                  src={ImagenP}
                />
                <div className="card-body bor">
                  <p className="card-text  texto name">Nombre del Proyecto</p>
                  <p className="card-text  texto name1">Tipo del Proyecto</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row rowwork rowcen">
            <div className="col-md-4 colr">
              <div className="card cardwith">
                <Image
                  src={ImagenP}
                />
                <div className="mg">
                  <p className="bor1 bor4"></p>
                  <div className="bor2 bor3 btproyect texto"><p><b>Nombre del Proyect</b></p>
                    <p className="btproyect texto">Tipo del proyecto</p> </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 colr">
              <div className="card cardwith">
                <Image
                  src={ImagenP}
                />
                <div className="mg">
                  <p className="bor1 bor4"></p>
                  <div className="bor2 bor3 btproyect texto"><p><b>Nombre del Proyect</b></p>
                    <p className="btproyect texto">Tipo del proyecto</p> </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 colr">
              <div className="card cardwith">
                <Image
                  src={ImagenP}
                />
                <div className="mg">
                  <p className="bor1 bor4"></p>
                  <div className="bor2 bor3 btproyect texto"><p><b>Nombre del Proyect</b></p>
                    <p className="btproyect texto">Tipo del proyecto</p> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default work;
