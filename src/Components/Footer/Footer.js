import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import footer from './../../Assets/img/PacUeco.svg';
import './../../Style/Footer.css';
class Contact extends Component {
  render() {
    return (
      <div className="container-fluid footers">
        <div className="row footer-row footer-txt">
          <div className="col-md-6 footer-col">
            <p className="footer-girasolo footer-txt footer-texto-girasolo texto">BigPink/Girasolo 2019</p>
          </div>
          <div className="col-md-6 footer-col">
            <Image src={footer} className="footer-pacueco"></Image>
            <p className="footer-girasolo footer-movil texto">BigPink/Girasolo 2019</p>
          </div>
        </div>

        <div className="row footer footer-row footer-movil center footer-movil">
          <div className="col-md-6 footer-col center footer-movil">
            <Image src={footer} className="center footer-imagen-movil"></Image>
          </div>
          <div className="col-md-6 footer-col center footer-movil">
            <p className="footer-texto footer-movil texto">BigPink/Girasolo 2019</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
