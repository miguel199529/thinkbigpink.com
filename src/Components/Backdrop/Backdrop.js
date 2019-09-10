import React from 'react';
import './Backdrop.css';
import PropTypes from 'prop-types';
const backdrop = props => (
  <div className="backdrop" onClick={props.click}>

    <p>CERRAR</p>

  </div>
);
backdrop.propTypes={
  click: PropTypes.func.isRequired
};
export default backdrop;
