import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//3rd step of Redux: Setting up the store

import { Provider } from 'react-redux'; //Provider will pass down the store to the app, then pass the store key to Provider as the store const made below
import { createStore } from 'redux';

import reducer from './reducers';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }> 
    <App />
  </Provider>,
  document.getElementById('root')
)
