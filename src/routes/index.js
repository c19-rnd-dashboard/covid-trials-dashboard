import React, { useState, useContext, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Vaccines from './vaccines/Vaccines'
import Treatments from './treatments/Treatments'
import {store} from '../store'
import mockData from '../mocks/assets'

const Routes = () => {
  const [ vaccines, setVaccines ] = useState([]);
  const [ treatments, setTreatments ] = useState([]);

  // const match = useRouteMatch()
  const [ filters, setFilters ] = useState([]);

  // const globalState = useContext(store);
  // const { data } = globalState && globalState.state
  // console.log(data, 'state')
  // const applyFiltersFromPath = () => {
  //   // TODO: set filter based on match.params
  //   setFilters('')
  // }


  useEffect(() => {
    const vaccineData = mockData.filter((product) => product.interventionType.includes('vaccine'));
    const treatmentData = mockData.filter((product) => !product.interventionType.includes('vaccine'))
    if (treatments.length !== treatmentData.length) {
      setTreatments(treatmentData)
    }
    if (vaccines.length !== vaccineData.length) {
      setVaccines(vaccineData)
    }
  }, [mockData, treatments.length, vaccines.length])

  return (
    <Switch>
      <Route path={'/vaccines'} render={() => (
        <Vaccines filters={filters} vaccines={vaccines} />
      )} />
      <Route path={'/treatments'} render={() => (
        <Treatments filters={filters} treatments={treatments} />
      )} />
      <Route
        path={'/'}
        render={() => (
          <Vaccines filters={filters} vaccines={vaccines} />
        )}
      />
    </Switch>
  )
}

export default Routes
