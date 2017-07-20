/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
//import { JsonGetter } from './JsonGetter.js';

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import calcApp from './reducers'
import Addition from './containers/Addition'
import Multiplication from './containers/Multiplication'
import DevTools from './containers/DevTools';

// store は1つだけ使う
//const store = createStore(
//  calcApp,
//  applyMiddleware(logger)
//)
const store = (() => {

  const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(logger),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  );

  return createStore(
    calcApp,
    enhancer
  );
})()


render(
  <Provider store={store}>
    <div>
      <Addition />
    </div>
  </Provider>,
  document.getElementById('root-addition')
)

render(
  <Provider store={store}>
    <Multiplication />
  </Provider>,
  document.getElementById('root-multiplication')
)
