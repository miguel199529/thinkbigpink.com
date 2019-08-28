import React, { Component } from 'react';

import { Container, Row, Image } from 'react-bootstrap';
import './../Assets/fonts/Hack-Regular.ttf';
//importar imagenes
import Imagen from './../Assets/2Puntos.svg';
import BigPink from './../Assets/LogotipoOficial.svg';
import './../Style/home.css';
class Home extends Component {
  render() {
    return (
      <Container className="bac cnt">
        <Row>
          <Image
            src={Imagen}
            className="dps marg dsp ic"
            width="50px;"
            height="50px;"
          />
        </Row>
        <Row className="center">
          <Image
            src={BigPink}
            className="imgcenter center imgc big nbg"
            width="35%;"
          />
        </Row>

        <Row className="sp bac">
          <p className="prf sp texto">
            <i>&quot;SE HABLA ESPAÑOL.&quot;</i>
          </p>
        </Row>
      </Container>
    );
  }
}
export default Home;
