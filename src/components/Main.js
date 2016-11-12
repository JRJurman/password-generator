import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';

import Settings from './Settings.js';
import PasswordField from './PasswordField.js';

class Main extends Component {
  render() {

    const emptyArray = Array(this.props.settings.length).join('.').split('.');
    const password = emptyArray.map(()=> {
      const randomValue = Math.floor(Math.random()*(26)+97);
      return String.fromCharCode(randomValue);
    }).join('');

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Password Generator</h2>
        </div>

        <Settings />
        <PasswordField password={password}/>

      </div>
    );
  }
}

function select(state) {
  return {
    settings: state.settings
  };
}

export default connect(select)(Main);
