import React from 'react'
import * as S from './styles'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar'
import { StateProvider } from './store'
import Router from './routes'
import ReactGA from 'react-ga'
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'constants/config'

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID)
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
  return (
    <StateProvider>
      <Navbar />
      <SubNavbar />
      <S.Content>
        <Router />
      </S.Content>
    </StateProvider>
  )
}

export default App
