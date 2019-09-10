import React from 'react';
import './SideDrawer.css';
import PropTypes from 'prop-types';
const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show){
    drawerClasses='side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li> <a href="#About" onClick={props.click}>About</a>
        </li>
        <li> <a href="#Work" onClick={props.click}>Work</a>
        </li>
        <li> <a href="#People" onClick={props.click}>People</a>
        </li>
        <li> <a href="#Girasolo" onClick={props.click}>Girasolo</a>
        </li>
        <li> <a href="#Contact" onClick={props.click}>Contact</a>
        </li>
      </ul>
    </nav>);
};

sideDrawer.propTypes={
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired
};
export default sideDrawer;
