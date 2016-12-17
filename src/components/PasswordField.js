import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, FormControl } from 'react-bootstrap';

const containerStyle = {
  fontFamily: 'monospace',
  display: 'flex',
  margin: '40px',
  alignItems: 'center'
}

const itemStyle = {
  flexGrow: 1,
  fontSize: '22px',
  height: '2.2em'
};

class PasswordField extends Component {
  render() {

    const style = Object.assign({}, containerStyle, this.props.style);

    return (
      <FormGroup style={style} validationState="success">
        <FormControl style={itemStyle} readOnly="true" type="text" value={this.props.password}>
        </FormControl>
      </FormGroup>
    );
  }
}

function select(state) {
  return {
    settings: state.settings
  };
}

export default connect(select)(PasswordField);
