import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import app from './reducers/index';
import Main from './components/Main';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(app);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
