import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers/index';

import Settings from './components/Settings.js';
import PasswordField from './components/PasswordField.js';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(app);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Password Generator</h2>
          </div>

          <Settings />
          <PasswordField password={'foo'}/>

        </div>
      </Provider>
    );
  }
}

export default App;
