import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-translate';

class Button extends Component {
  render() {
    let  traductor  = this.props.t;
    return (<button>{traductor(this.props.name)}</button>


    );
  }
}
Button.propTypes={
  t: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};
export default translate('buttons')(Button);
