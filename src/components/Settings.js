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

  constructor(props) {
    super(props);
    this.state = {
      length: 13
    };
  }

  onLengthResize(eventProxy) {
    const value = eventProxy.nativeEvent.target.value;
    this.setState({length: value});
  }

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
          <h3><Label bsStyle="primary">
            Password Size : {this.state.length}
          </Label></h3>
        </div>
        <div style={containerStyle}>
          <input type="range"
            defaultValue={13} min={6} max={50}
            onChange={this.onLengthResize.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default Settings;
