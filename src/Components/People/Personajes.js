import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './../../Assets/fonts/Hack-Regular.ttf';
import PropTypes from 'prop-types';
import './../../Style/Personajes.css';
class Personajes extends Component {
  render() {
    return (
      <div className=" container-fluid">
        <div className="row">

          <Image src={this.props.personaje} className="people-width"
          />
        </div>
      </div>
    );
  }
}
Personajes.propTypes = {
  personaje: PropTypes.string,
};
export default Personajes;
