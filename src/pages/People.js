import React, { Component } from 'react';



import './../Assets/fonts/Hack-Regular.ttf';
import './../Style/people.css';
import { Image } from 'react-bootstrap';
import ImagenP1 from './../Assets/david.png';
import BigPink from './../Assets/LogotipoOficial.svg';
class people extends Component {
  render() {
    return (


      <div className="container-fluid">
        <div className="row rowwork rowcen">



          <div className="col-md-4 colr1 ">

            <Image
              src={ImagenP1}
              className="pepl"
            />



            <p class="card-text  texto name">//Nombre del integrante</p>
            <p class="card-text  texto name1">Info</p>
          </div>
          <div className="col-md-4 colr1 ">

            <Image
              src={ImagenP1}
              className="pepl"

            />



            <p class="card-text  texto name">//Nombre del integrante</p>
            <p class="card-text  texto name1">Info</p>
          </div>
          <div className="col-md-4 colr1">

            <Image
              src={ImagenP1}
              className="pepl"
            />



            <p class="card-text  texto name">//Nombre del integrante</p>
            <p class="card-text  texto name1">Info</p>
          </div>

        </div>

      </div>
    );
  }
}





export default people;
