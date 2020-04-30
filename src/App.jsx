import React from 'react'
import * as S from './styles'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar'
import { StateProvider } from './store'
import Router from './routes'

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
