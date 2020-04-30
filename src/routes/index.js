import React, { useState, useContext, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Vaccines from './vaccines/Vaccines'
import Treatments from './treatments/Treatments'
import { store } from '../store'
import {ProdData} from '../mocks/assets'

const Routes = () => {
  const [vaccines, setVaccines] = useState([])
  const [treatments, setTreatments] = useState([])

  // const match = useRouteMatch()
  const [filters, setFilters] = useState([])

  const globalState = useContext(store);
  const { data } = globalState && globalState.state
  // console.log(data, 'state')
  // const applyFiltersFromPath = () => {
  //   // TODO: set filter based on match.params
  //   setFilters('')
  // }

  // Temp solution to unblock waiting for API to add lat and long
  const generateRandomLocation = () => {
    const maxLon = 180;
    const minLon = -180;
    const maxLat = 90;
    const minLat = -90;
    return {
      name: 'Test',
      city: 'Test',
      state: 'Test',
      country: 'Test',
      lat: Math.floor(Math.random() * (maxLat-minLat)) + minLat + 0.239746,
      lon: Math.floor(Math.random() * (maxLon-minLon)) + minLon + 0.239746,
    }
  }

  useEffect(() => {
    const copiedData = [...ProdData]
    ProdData.length > 0 && copiedData.forEach(product => {
      product.siteLocations = [generateRandomLocation()]
    })
    const vaccineData = ProdData.length > 0 && copiedData.filter(product =>
      product.interventionType.includes('vaccine')
    )
    const treatmentData = ProdData.length > 0 && copiedData.filter(
      product => !product.interventionType.includes('vaccine')
    )
    if (treatmentData && treatments.length !== treatmentData.length) {
      setTreatments(treatmentData)
    }
    if (vaccineData && vaccines.length !== vaccineData.length) {
      setVaccines(vaccineData)
    }
  }, [ProdData, treatments.length, vaccines.length])

  console.log(vaccines, treatments, 'vac and treats')
  return (
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <Vaccines filters={filters} vaccines={vaccines} />}
      />
      <Route
        path={'/treatments'}
        render={() => <Treatments filters={filters} treatments={treatments} />}
      />
      <Route
        path={'/'}
        render={() => <Vaccines filters={filters} vaccines={vaccines} />}
      />
    </Switch>
  )
}

export default Routes
