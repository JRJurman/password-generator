import React, { Component } from 'react';

import { Label, Button } from 'react-bootstrap';

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 40px'
};

const itemStyle = {
  width: '187px'
};

class Settings extends Component {
  render() {
    return (
      <div>
        <div style={containerStyle}>
          <Button style={itemStyle} bsSize="large" bsStyle="default">
            Capital Letters
          </Button>
          <Button style={itemStyle} bsSize="large" bsStyle="default">
            Special Characters
          </Button>
          <Button style={itemStyle} bsSize="large" bsStyle="default">
            Numbers
          </Button>
        </div>
        <div style={containerStyle}>
          <h3><Label bsStyle="primary"> Password Size : 15 </Label></h3>
        </div>
        <div style={containerStyle}>
          <input type="range"></input>
        </div>
      </div>
    );
  }
}

export default Settings;
