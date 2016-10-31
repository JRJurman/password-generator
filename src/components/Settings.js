import React, { Component } from 'react';

import { Label, Button } from 'react-bootstrap';


class Settings extends Component {
  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '20px 0px',
      alignItems: 'center'
    };
    const itemStyle = {
      width: '187px'
    };

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
