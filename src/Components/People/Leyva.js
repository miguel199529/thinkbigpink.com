import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import leyva from './../../Assets/People/edgar.jpg';
import './../../Style/Personajes.css';
class Leyva extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={leyva} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Leyva;
