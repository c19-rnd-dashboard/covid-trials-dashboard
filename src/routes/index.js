import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './VaccinesFiltered'
import TreatmentsFiltered from './TreatmentsFiltered'
import TreatmentsAndVaccinesFiltered from './TreatmentsAndVacsFiltered'
import { store } from '../store'
// import { ProdData } from '../mocks/assets'

const Routes = () => {
  const globalState = useContext(store)
  const { treatments, vaccines } = globalState && globalState.state
  const tAndV = [...treatments, ...vaccines]
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
      <Route
        path={'/vt'}
        render={() => <TreatmentsAndVaccinesFiltered tAndV={tAndV} />}
      />
      <Route path={'/'} render={() => <Vaccines vaccines={vaccines} />} />
    </Switch>
  )
}

export default Routes
