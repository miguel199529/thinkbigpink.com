import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import nav from './../../Assets/img/nav.png';
import './../../Style/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row nav-row nav-posicion-fixed" id="navbar">
          <ul className="nav-desktop uls">
            <li>
              <a href="#home">
                <Image src={nav} className="nav-img-desk"></Image>
              </a>
            </li>
            <li className="nav-posicion lis">
              <a href="#Contact" className="active link" spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Contact</a>
            </li>
            <li className="nav-posicion lis">
              <a href="#Girasolo" className="active link" spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Girasolo</a>
            </li>
            <li className="nav-posicion lis">
              <a href="#People" className="active link" spy={true}
                smooth={true}
                offset={-70}
                duration={500} >People</a>
            </li>
            <li className="nav-posicion lis">
              <a href="#Work"  className="active link" spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Work</a>
            </li>
            <li className="nav-posicion lis">
              <a href="#About" className="active link" spy={true}
                smooth={true}
                offset={-70}
                duration={500}>About</a>
            </li>
          </ul>
        </div>
      </div>


    );
  }
}
export default NavBar;
