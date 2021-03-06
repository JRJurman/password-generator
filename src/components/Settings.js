import React, { Component } from 'react';

import { Label, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import {  setPasswordLength, setCaptialOption, setSpecialOption,
          setNumberOption } from '../reducers/settings';

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 40px',
  flexWrap: 'wrap',
};

const itemStyle = {
  width: '187px',
  margin: '0.2em 1em'
};

class Settings extends Component {

  onLengthResize(eventProxy) {
    const value = parseInt(eventProxy.nativeEvent.target.value, 10);
    const { dispatch } = this.props;
    dispatch(setPasswordLength(value));
  }

  onCapitalLettersClick() {
    const { dispatch, settings } = this.props;
    dispatch(setCaptialOption(!settings.captialOption));
  }

  onSpecialCharactersClick() {
    const { dispatch, settings } = this.props;
    dispatch(setSpecialOption(!settings.specialOption));
  }

  onNumbersClick() {
    const { dispatch, settings } = this.props;
    dispatch(setNumberOption(!settings.numberOption));
  }

  render() {
    const { captialOption, specialOption,
            numberOption} = this.props.settings;

    return (
      <div>
        <div style={containerStyle}>
          <Button style={itemStyle} bsSize="large"
                  bsStyle={captialOption ? 'primary' : 'default'}
                  onClick={this.onCapitalLettersClick.bind(this)}>
            Capital Letters
          </Button>
          <Button style={itemStyle} bsSize="large"
                  bsStyle={specialOption ? 'primary' : 'default'}
                  onClick={this.onSpecialCharactersClick.bind(this)}>
            Special Characters
          </Button>
          <Button style={itemStyle} bsSize="large"
                  bsStyle={numberOption ? 'primary' : 'default'}
                  onClick={this.onNumbersClick.bind(this)}>
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
