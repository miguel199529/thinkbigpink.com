import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import girasolo from './../../Assets/img/LogotipoGirasolo.svg';
import './../../Style/Girasolo.css';
class Girasolo extends Component {
  render() {
    return (
      <div className="container-fluid" id="Girasolo">
        <div className="row wave">
          <div className="col-md-6">
            <span className="girasolo texto">GIRASOLO <span className="parpadea">&#124;</span></span>
            <p className="girasolo-txt  texto"> &nbsp; &nbsp; &nbsp; We are Girasolo&#180;s younger brother, an agency specialized in visual communication and digital marketing.</p>
            <p className="girasolo-txto texto">We team up with them to make functional and lovely projects.</p>
            <p className="girasolo-txto texto">Check them out at:</p>
            <div> &#60;<a href="http://www.girasolo.mx/" className="contact-pink girasolo-txto wave-texto"> <i> www.girasolo.com</i></a>&#62;</div>
          </div>
          <div className="col-md-6 col-girasolo">
            <Image src={girasolo} className="girasolo-img"></Image>
          </div>
        </div>
      </div>
    );
  }
}
export default Girasolo;
