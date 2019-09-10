
import React from 'react';
import './Toolbar.css';
import {Image} from 'react-bootstrap';
import imagen from './../../Assets/img/nav.png';
import DrawerToggleButton from './../SideDRawer/DrawerToggleButton';
import PropTypes from 'prop-types';
const toolbar = props => (

  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler}></DrawerToggleButton>

      </div>
      <div className="toolbar__logo"><a href="/home"><Image src={imagen} className="tol-img"></Image></a></div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items texto">
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="/#Work">Work</a></li>
          <li><a href="/#People">People</a></li>
          <li><a href="/#Girasolo">Girasolo</a></li>
          <li><a href="/#Contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
);

toolbar.propTypes={
  drawerClickHandler: PropTypes.func.isRequired,

};
export default toolbar;
