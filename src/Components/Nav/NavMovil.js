import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import nav from './../../Assets/img/nav.png';
import hamburguesan from './../../Assets/img/hamburguesa.svg';
import './../../Style/NavMovil.css';
class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="mobile-container nav-movil">
          <div className="topnav">
            <Link to="#"className="active nav-img">
              <Image src={nav}></Image>
            </Link>
            <div id="myLinks">
              <Link to="#" className="nav-cont">About</Link>
              <Link to="#" className="nav-cont">Work</Link>
              <Link to="#" className="nav-cont">People</Link>
              <Link to="#" className="nav-cont">Girasolo</Link>
              <Link to="#" className="nav-cont">Contact</Link>
            </div>
            <a href="javascript:void(0);" className="icon" onClick="myFunction()">
              <Image src={hamburguesan} class="top-hamburguesa"></Image>
            </a>
          </div>
        </div>

      </div>
    );
  }
}
export default NavBar;
