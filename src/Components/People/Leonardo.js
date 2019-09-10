import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import leo from './../../Assets/People/leo.jpg';
import './../../Style/Personajes.css';
class Leonardo extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">
          <Image src={leo} className="people-width"
          />
        </div>
      </div>
    );
  }
}
export default Leonardo;
