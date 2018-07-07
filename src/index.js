import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// If your server supports server rendering, use browserHistory replace with hashHistory.
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './js/routes'
import { configureStore } from './js/store'
import './css/style.css'

const state = window.__initialState__ || undefined
const store = configureStore(hashHistory, state)
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
