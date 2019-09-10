import React, { Component } from 'react';
import './../../App.css';
import Toolbar from './../../Components/Menu/Toolbar';
import SideDrawer from './../SideDRawer/SideDrawer';
import Backdrop from './../../Components/Backdrop/Backdrop';
class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOPen: false,
    };

    this.drawerToggleClickHandler=this.drawerToggleClickHandler.bind(this);
    this.backdropClickHandler=this.backdropClickHandler.bind(this);
  }
  drawerToggleClickHandler() {
    this.setState((prevState) => {
      return { sideDrawerOPen: !prevState.sideDrawerOPen };
    });
  }
  backdropClickHandler() {
    this.setState({ sideDrawerOPen: false });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOPen) {

      backdrop = <Backdrop click={this.backdropClickHandler}></Backdrop>;
    }
    return (

      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}></Toolbar>
        <SideDrawer show={this.state.sideDrawerOPen}
          click={this.backdropClickHandler}></SideDrawer>

        {backdrop}
        <main style={{ marginTop: '0px' }}>
        </main>

      </div>

    );
  }
}
export default Menu;
