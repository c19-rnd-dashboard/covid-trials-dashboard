import React, { useState, useEffect, useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './vaccines/Vaccines'
import Treatments from './treatments/Treatments'
import { store } from '../store'
// import { ProdData } from '../mocks/assets'

const Routes = () => {
  const [vaccinesFiltered, setVaccinesFiltered] = useState([])
  const [treatmentsFiltered, setTreatmentsFiltered] = useState([])

  // const match = useRouteMatch()
  // const [filters, setFilters] = useState([])

  const globalState = useContext(store)
  const { treatments, vaccines } = globalState && globalState.state
  // console.log(data, 'state')
  // const applyFiltersFromPath = () => {
  //   // TODO: set filter based on match.params
  //   setFilters('')
  // }

  // Temp solution to unblock waiting for API to add lat and long
  const generateRandomLocation = () => {
    const maxLon = 180
    const minLon = -180
    const maxLat = 90
    const minLat = -90
    return {
      name: 'Test',
      city: 'Test',
      state: 'Test',
      country: 'Test',
      lat: Math.floor(Math.random() * (maxLat - minLat)) + minLat + 0.239746,
      lon: Math.floor(Math.random() * (maxLon - minLon)) + minLon + 0.239746,
    }
  }

  useEffect(() => {
    const copiedTreatments = [...treatments]
    const copiedVaccines = [...vaccines]
    copiedTreatments.forEach(product => {
      product.siteLocations = [generateRandomLocation()]
    })
    copiedVaccines.forEach(product => {
      product.siteLocations = [generateRandomLocation()]
    })

    setTreatmentsFiltered(copiedTreatments)
    setVaccinesFiltered(copiedVaccines)

    // if (treatmentData && treatments.length !== treatmentData.length) {
    //   setTreatments(treatmentData)
    // }
    // if (vaccineData && vaccines.length !== vaccineData.length) {
    //   setVaccines(vaccineData)
    // }
  }, [vaccines, treatments])

  return (
    // <div>hi</div>
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <Vaccines vaccines={vaccinesFiltered} />}
      />
      <Route
        path={'/treatments'}
        render={() => <Treatments treatments={treatmentsFiltered} />}
      />
      <Route
        path={'/'}
        render={() => <Vaccines vaccines={vaccinesFiltered} />}
      />
    </Switch>
  )
}

export default Routes
