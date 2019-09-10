import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import nancy from './../../Assets/People/nancy.jpg';
import './../../Style/Personajes.css';
class Nancy extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={nancy} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Nancy;
