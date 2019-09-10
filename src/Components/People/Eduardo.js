import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import lalo from './../../Assets/People/lalo.jpg';
import './../../Style/Personajes.css';
class Eduardo extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={lalo} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Eduardo;
