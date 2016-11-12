import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormGroup, FormControl } from 'react-bootstrap';

const containerStyle = {
  display: 'flex',
  margin: '40px',
  alignItems: 'center'
}

const itemStyle = {
  flexGrow: 1
};

class PasswordField extends Component {
  render() {
    return (
      <FormGroup style={containerStyle} validationState="success">
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
