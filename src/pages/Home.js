import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container, Row, Image } from 'react-bootstrap';
import { Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './../Assets/fonts/Hack-Regular.ttf';
import Imagen from './../Assets/2Puntos.svg';
import BigPink from './../Assets/LogotipoOficial.svg';
import './../Style/home.css'
class home extends Component {
  render() {
    return (
      <div className=" container-fluid bachome">
        <Row className="center imgrow">
          <div class="col-md-4">
          </div>
          <div class="col-md-4 center">
            <Image
              src={BigPink}
              className="imgn"
            />
          </div>
          <div class="col-md-4">
          </div>
        </Row>
        <div className="row">
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3 texto speak">
            <i>"SE HABLA ESPAÑOL"</i>
          </div>
        </div>
      </div>

    );
  }
}
export default home;
