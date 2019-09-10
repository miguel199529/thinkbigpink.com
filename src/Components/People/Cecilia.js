import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import cecy from './../../Assets/People/cecy.jpg';
import './../../Style/Personajes.css';
class Cecilia extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={cecy} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Cecilia;
