import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './vaccines/VaccinesFiltered'
import TreatmentsFiltered from './treatments/TreatmentsFiltered'
import { store } from '../store'
// import { ProdData } from '../mocks/assets'

const Routes = () => {
  const globalState = useContext(store)
  const { treatments, vaccines } = globalState && globalState.state
  return (
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <Vaccines vaccines={vaccines} />}
      />
      <Route
        path={'/treatments'}
        render={() => <TreatmentsFiltered treatments={treatments} />}
      />
      <Route path={'/'} render={() => <Vaccines vaccines={vaccines} />} />
    </Switch>
  )
}

export default Routes
