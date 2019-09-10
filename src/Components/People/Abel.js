import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import abel from './../../Assets/People/Abelito.jpg';
import './../../Style/Personajes.css';
class Abel extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={abel} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Abel;
