import React, { useContext } from 'react'
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'
import Navbar from 'components/Navbar/Navbar'
import { Content } from 'styles'
import Router from './routes'
import { store } from './store'
import yellow from '@material-ui/core/colors/yellow'

export const ThemedApp = () => {
  const globalState = useContext(store)
  const { prefersDarkMode } = (globalState && globalState.state) || {}

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          secondary: yellow,
          primary: {
            main: '#2D5686',
          },
          accent: '#5e92f3',
        },
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Content>
        <Router />
      </Content>
    </ThemeProvider>
  )
}
