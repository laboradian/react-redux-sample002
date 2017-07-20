/* global */
import '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
//import { JsonGetter } from './JsonGetter.js';

// index.html ファイルをコピーする
require('file-loader?name=../../dist/[name].[ext]!../index.html');

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import calcApp from './reducers'
import Addition from './containers/Addition'
import Multiplication from './containers/Multiplication'

// store は1つだけ使う
const store = createStore(
  calcApp,
  applyMiddleware(logger)
)

render(
  <Provider store={store}>
    <Addition />
  </Provider>,
  document.getElementById('root-addition')
)

render(
  <Provider store={store}>
    <Multiplication />
  </Provider>,
  document.getElementById('root-multiplication')
)
