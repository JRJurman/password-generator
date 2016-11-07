import React, { Component } from 'react';

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

export default PasswordField;
