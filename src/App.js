import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Settings from './components/Settings.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Password Generator</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Settings />
      </div>
    );
  }
}

export default App;