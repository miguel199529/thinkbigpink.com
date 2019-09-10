import React, { Component } from 'react';
import Aboutdevelop from './AboutDevelop';
import AboutServices from './AboutServices';
import AboutWork from './AboutWork';
import AboutArewe from './AboutArewe';
class about extends Component {
  render() {
    return (
      <div id="About">
        <Aboutdevelop></Aboutdevelop>
        <AboutServices></AboutServices>
        <AboutWork></AboutWork>
        <AboutArewe></AboutArewe>
      </div>
    );
  }
}
export default about;

