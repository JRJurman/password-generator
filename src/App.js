import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Settings from './components/Settings.js';
import PasswordField from './components/PasswordField.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Password Generator</h2>
        </div>

        <Settings />
        <PasswordField password={'foo'}/>

      </div>
    );
  }
}

export default App;
