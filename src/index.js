import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useStore } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import './index.css'


// Store -> Globalize store

// Actions
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

// Reducer
const counter = (state=0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state += 1;
    default:
      return state;
  }
}

let stores = configureStore({reducer: counter})

// store.subscribe(() => console.log)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
