import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = [], action) => {
  switch (action.type) {
      case 'FEELING':
          return action.payload;
  }
  return state;
};

const understandingReducer = (state = [], action) => {
  switch (action.type) {
      case 'UNDERSTANDING':
          return action.payload;
  }
  return state;
};

const supportReducer = (state = [], action) => {
  switch (action.type) {
      case 'SUPPORT':
          return action.payload;
  }
  return state;
};

const commentsReducer = (state = [], action) => {
  switch (action.type) {
      case 'COMMENTS':
          return action.payload;
  }
  return state;
};

const storeInstance = createStore (
  combineReducers({
    feelingReducer,
    understandingReducer,
    supportReducer,
    commentsReducer,
  })
)

ReactDOM.render(
<Provider store={storeInstance}>
  <App />
</Provider>,
  document.getElementById('root'));
  registerServiceWorker();