import React, { Component } from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import app from './reducers/index';

import Main from './components/Main';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(app);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;
