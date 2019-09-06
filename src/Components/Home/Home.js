import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import BigPink from './../../Assets/img/home/LogotipoOficial.svg';
import './../../Style/Home.css';
class home extends Component {
  render() {
    return (
      <div className=" container-fluid main-background">
        <div className=" row center">
          <div className="col-md-12 center main-logo">
            <Image
              src={BigPink}
              className="main-logotype"
            />
          </div>
        </div>
        <div className="row main-translator">
          <p className="texto"><i>&quot;SE HABLA ESPAÑOL&quot;</i></p>
        </div>
      </div>
    );
  }
}
export default home;
