import React, { Component } from 'react';

import { Label, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setPasswordLength } from '../reducers/settings';

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

  onLengthResize(eventProxy) {
    const value = parseInt(eventProxy.nativeEvent.target.value, 10);
    const { dispatch } = this.props;
    dispatch(setPasswordLength(value));
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
            Password Size : {this.props.settings.length}
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


function select(state) {
  return {
    settings: state.settings
  };
}

export default connect(select)(Settings);
