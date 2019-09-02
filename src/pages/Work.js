import React, { Component } from 'react';
import { Container, Row, Image, Col } from 'react-bootstrap';
import ImagenP from './../Assets/LogotipoGirasolo.svg';
import './../Style/work.css';

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
                <div class="card-body bor polaroid">
                  <p class="card-text  texto name">Nombre del Proyecto</p>
                  <p class="card-text  texto name1">Tipo del Proyecto</p>
                </div>
              </div>

            </div>
            <div className="col-md-4 colr ">
              <div className="card cardwith polaroid">
                <Image
                  src={ImagenP}

                />

                <div class="card-body bor">
                  <p class="card-text  texto name">Nombre del Proyecto</p>
                  <p class="card-text  texto name1">Tipo del Proyecto</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 colr ">
              <div className="card cardwith polaroid">
                <Image
                  src={ImagenP}

                />
                <div class="card-body bor">
                  <p class="card-text  texto name">Nombre del Proyecto</p>
                  <p class="card-text  texto name1">Tipo del Proyecto</p>
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
