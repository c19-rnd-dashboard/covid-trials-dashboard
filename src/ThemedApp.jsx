import React, { Suspense, useContext } from 'react'
import { ThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core'
import Navbar from 'components/Navbar/Navbar'
import { Content } from 'styles'
import Router from './routes'
import { store } from './store'
import Footer from 'rc-footer'
import Twitter from './assets/images/Twitter_Social_Icon_Circle_White.svg'
import 'rc-footer/assets/index.css' // import 'rc-footer/asssets/index.less';

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
        <Footer
          backgroundColor='#00275B'
          // columnLayout='space-between'
          columns={[
            // NO IDEA WHY I HAD TO WRAP IN LINKS, SEEMS THE LIBRARY DOESN'T WORK
            {
              icon: (
                <a
                  href='https://twitter.com/COVIDTrialDash'
                  rel='noopener noreferrer'
                >
                  <img src={Twitter} alt='twitter' />
                </a>
              ),
              title: (
                <a
                  href='https://twitter.com/COVIDTrialDash'
                  rel='noopener noreferrer'
                >
                  @CovidTrialDash
                </a>
              ),
              url: 'https://twitter.com/COVIDTrialDash',
              description: 'twitter',
              openExternal: true,
            },
            {
              // icon: <img src={Twitter} />,
              title: (
                <a
                  href='https://coviddash.org/contact'
                  rel='noopener noreferrer'
                >
                  Contact Us
                </a>
              ),
              url: 'https://coviddash.com/contact',
              description: 'contact',
              // openExternal: true,
            },
            {
              title: (
                <a href='https://coviddash.org/faq' rel='noopener noreferrer'>
                  Learn More (FAQ)
                </a>
              ),
              url: 'https://coviddash.com/faq',
              description: 'desc',
              // openExternal: true,
            },
          ]}
          bottom='Made with ❤️ by Volunteers'
        />
      </Suspense>
    </ThemeProvider>
  )
}
