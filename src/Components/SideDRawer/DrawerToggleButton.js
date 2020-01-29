
import React from 'react';
import './DRawerToggleButton.css';
import PropTypes from 'prop-types';
const drawerToggleButton = props => (


  <button className="toggle-button" onClick={props.click}>

    <div className="toggle-button__line">

    </div>
    <div className="toggle-button__line">

    </div>
    <div className="toggle-button__line">

    </div>
  </button>
);
drawerToggleButton.propTypes={
  click: PropTypes.func.isRequired
};
export default drawerToggleButton;
