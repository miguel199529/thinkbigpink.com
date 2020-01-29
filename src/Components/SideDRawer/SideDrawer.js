import React from 'react';
import './SideDrawer.css';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';

  let url = window.location.href;
  let idioma;
  if (url.search('/es') !== -1) {
    idioma='es';
  } else {
    idioma='en';
  }

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
        <li>
          {
            idioma === 'en' ? (
              <span >< a href="/es">Español</a></span>
            ) : (<span >< a href="/en">English</a></span>)
          }
        </li>
      </ul>
    </nav>);
};

sideDrawer.propTypes={
  t: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
  nav: PropTypes.string.isRequired
};
export default translate('SideDrawer')(sideDrawer);
