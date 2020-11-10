import LogRocket from 'logrocket'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'
import './i18n'

if (process.env.NODE_ENV === 'production') {
  LogRocket.init(process.env.REACT_APP_LOG_ROCKET_KEY)
}

ReactDOM.render(
  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryParamProvider>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
