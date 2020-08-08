import React from 'react'
import { StateProvider } from './store'
import ReactGA from 'react-ga'
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'constants/config'
import { ThemedApp } from 'ThemedApp'

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID)
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
  return (
    <StateProvider>
      <ThemedApp />
    </StateProvider>
  )
}

export default App
