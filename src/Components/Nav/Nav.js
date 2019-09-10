import React from 'react';
import {Image} from 'react-bootstrap';
import hamburguesa from './../../Assets/img/hamburguesa.svg';
import './../../Style/NavMovil.css';


class Dropdow extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
      <div className="dropdown drop-color nv-movil posicion-zindex">
        <div className="button" onClick={this.showDropdownMenu}> <Image src={hamburguesa}></Image></div>

        {this.state.displayMenu ? (
          <ul>
            <li><a className="active li-posicion" href="#Create Page">About</a></li>
            <li><a href="#Manage Pages" className="li-posicion">Work</a></li>
            <li><a href="#Create Ads" className="li-posicion">People</a></li>
            <li><a href="#Manage Ads" className="li-posicion">GIrasolo</a></li>
            <li><a href="#Activity Logs" className="li-posicion">Contact</a></li>
            <li><a href="#Setting" className="li-posicion">Español</a></li>

          </ul>
        ) :
          (
            null
          )
        }

      </div>

    );
  }
}

export default Dropdow;
