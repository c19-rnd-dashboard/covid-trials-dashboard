import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar'
import { StateProvider } from './store'
import Router from './routes'
import ReactGA from 'react-ga'
import { GOOGLE_ANALYTICS_TRACKING_ID } from 'constants/config'
import { Content } from './styles'

ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID)
ReactGA.pageview(window.location.pathname + window.location.search)

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StateProvider>
        <Navbar />
        <SubNavbar />
        <Content>
          <Router />
        </Content>
      </StateProvider>
    </ThemeProvider>
  )
}

export default App
