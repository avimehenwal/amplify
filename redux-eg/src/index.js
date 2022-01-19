import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './index.css';

// multiple reducers using combinedReducer
import { createStore } from "redux";

// STORE

// ACTIONS
const increment = () => {
  return {
    type: 'INCREMENT',
    payload: 1
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT',
    payload: -1
  }
}

// REDUCER
// store + oldState = newState
// let store = 0
const reducerFn = (state = 0, action: { type: any; }) => {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
    default:
      console.log('ERROR')
      break;
  }
}

let store = createStore(reducerFn,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
store.subscribe(() => console.log(store.getState()));

// DISPATCHER
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(decrement())
store.dispatch(decrement())

// <Provider store={store}>
// </Provider>,
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
