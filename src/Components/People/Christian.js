import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import cris from './../../Assets/People/lomp.jpg';
import './../../Style/Personajes.css';
class Christian extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={cris} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Christian;
