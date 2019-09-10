import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import andy from './../../Assets/People/andy.jpg';
import './../../Style/Personajes.css';
class Andrea extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={andy} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Andrea;
