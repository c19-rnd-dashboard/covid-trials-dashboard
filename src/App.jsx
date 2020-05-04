import React from 'react'
import * as S from './styles'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar'
import { StateProvider } from './store'
import Router from './routes'
import FilterDropDown from './components/FilterDropdown/FilterDropdown'

function App() {
  const handleChange = () => {
    console.log('input')
  }
  const filters = [
    {
      title: 'Sponsor 1',
      count: 12,
    },
    {
      title: 'Sponsor 2',
      count: 4,
    },
    {
      title: 'Sponsor 3',
      count: 48,
    },
  ]
  return (
    <StateProvider>
      <Navbar />
      <SubNavbar />
      <S.Content>
        <FilterDropDown
          label='sponsor'
          handleChange={handleChange}
          filters={filters}
        />
        <Router />
      </S.Content>
    </StateProvider>
  )
}

export default App
