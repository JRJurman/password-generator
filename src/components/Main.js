import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';

import Settings from './Settings.js';
import PasswordField from './PasswordField.js';

class Main extends Component {
  render() {

    const options = [
      () => {
        const randomValue = Math.floor(Math.random()*(26)+97);
        return String.fromCharCode(randomValue);
      },
      () => {
        const randomValue = Math.floor(Math.random()*(26)+65);
        return String.fromCharCode(randomValue);
      },
      () => {
        const randomValue = Math.floor(Math.random()*(10)+48);
        return String.fromCharCode(randomValue);
      },
      () => {
        const randomValue = Math.floor(Math.random()*(6)+58);
        return String.fromCharCode(randomValue);
      }
    ]

    const emptyArray = '.'.repeat(this.props.settings.length).split('.');
    const password = emptyArray.reduce((password, _, index)=> {
      const pass = Math.round(Math.random()) ? password.reverse() : password;
      return pass.concat(options[index % options.length]());
    }, []).join('');

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
