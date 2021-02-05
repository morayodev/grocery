import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension"
import ShopReducer from "./components/Redux/Shopping/Shopping-reducer"


   

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  shop: ShopReducer,
 
});

const store = createStore(
  rootReducer,
  composeWithDevTools());

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(
 app,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
