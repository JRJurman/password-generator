import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';

import Settings from './Settings';
import PasswordField from './PasswordField';

class Main extends Component {
  render() {
    const {options, length} = this.props.settings;

    const emptyArray = '.'.repeat(length).split('.');
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
