import React from 'react'
import * as S from './styles'
import Navbar from './components/Navbar/Navbar'
import SubNavbar from './components/SubNavbar/SubNavbar'
import Tile from './components/Tile/Tile'
import Details from './sections/Details/Details'
import VolunteerLocations from './sections/VolunteerLocations/VolunteerLocations'
import { StateProvider } from './store'
import VaccineProgress from './sections/VaccineProgress'
import TrialByCountry from './sections/VaccinesByCountry'

function App() {
  return (
    <StateProvider>
      <div className='App'>
        <Navbar />
        <SubNavbar />
        <S.Content>
          <div style={{ flex: '1' }}>
            <Tile header='Total Vaccine Products'>23</Tile>
            <TrialByCountry />
          </div>
          <VaccineProgress />
          <S.RightColumn>
            <Details />
            <VolunteerLocations />
          </S.RightColumn>
        </S.Content>
      </div>
    </StateProvider>
  )
}

export default App
