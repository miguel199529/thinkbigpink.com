import React, { Component } from 'react';
import './../../Style/Navegacion.css';
import {Image} from 'react-bootstrap';
import Logo from './../../Assets/img/LogotipoOficial.svg';
class NavCompleto extends Component {
  render() {
    return (
      <div className="container-fluid nav-posi">
        <ul>
          <li><a href="#About">
            <Image src={Logo} className="nav-logotipo"></Image></a></li>
          <li className="nav-posicion texto"><a className="active texto" href="#about">About</a></li>
          <li className="nav-posicion texto"><a  href="#work">Work</a></li>
          <li className="nav-posicion texto"><a  href="#people">People</a></li>
          <li className="nav-posicion texto"><a  href="#girasolo">Girasolo</a></li>
          <li className="nav-posicion texto"><a  href="#contact">Contact</a></li>
        </ul>

      </div>
    );
  }
}
export default NavCompleto;
