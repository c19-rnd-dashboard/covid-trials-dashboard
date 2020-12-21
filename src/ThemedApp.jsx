import React, { Suspense, useContext } from 'react'
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'
import Navbar from 'components/Navbar/Navbar'
import { Content } from 'styles'
import Router from './routes'
import { store } from './store'
import 'rc-footer/assets/index.css' // import 'rc-footer/asssets/index.less';
import { Footer } from 'components/Footer'

export const ThemedApp = () => {
  const globalState = useContext(store)
  const { prefersDarkMode } = (globalState && globalState.state) || {}

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#00275B',
          },
          secondary: {
            main: '#FF5761',
          },
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback='Loading...'>
        <Navbar />
        <Content>
          <Router />
        </Content>
        <div style={{ marginBottom: '46px' }} />
        <Footer />
      </Suspense>
    </ThemeProvider>
  )
}
