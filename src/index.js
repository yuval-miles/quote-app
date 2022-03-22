import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , combineReducers, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
import { getQuoteReducer } from './Reducers_and_actionCreators/getQuoteReducer';
import { appStartReducer } from './Reducers_and_actionCreators/appStartReducer';
import { likedQuoteReducer } from './Reducers_and_actionCreators/likedQuoteReducer';
import AppMaps from "./MapFuncs/AppMaps";

const rootReducer = combineReducers({
  quoteOps: getQuoteReducer,
  startOps: appStartReducer,
  likedOps: likedQuoteReducer
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

const AppContainer = connect(AppMaps.mapStateToProps,AppMaps.mapDispatchToProps)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
