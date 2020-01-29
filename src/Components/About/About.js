import React, { Component } from 'react';
import Aboutdevelop from './AboutDevelop';
import AboutServices from './AboutServices';
import AboutWork from './AboutWork';
import AboutArewe from './AboutArewe';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';

class about extends Component {
  render() {
    return (
      <div id="About">
        <Aboutdevelop name={this.props.name}></Aboutdevelop>
        <AboutServices name={this.props.name}></AboutServices>
        <AboutWork name={this.props.name}></AboutWork>
        <AboutArewe  name={this.props.name}></AboutArewe>
      </div>
    );
  }
}

about.propTypes={
  name: PropTypes.string,
};
export default translate('txt')(about);

