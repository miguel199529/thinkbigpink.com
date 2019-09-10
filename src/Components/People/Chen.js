import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import chen from './../../Assets/People/chen.jpg';
import './../../Style/Personajes.css';
class Chen extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={chen} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Chen;
