import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './VaccinesFiltered'
import { store } from '../store'
import Team from './Team'
// import { ProdData } from '../mocks/assets'

const Routes = () => {
  const globalState = useContext(store)
  const { vaccines = [] } = globalState && globalState.state
  return (
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <Vaccines vaccines={vaccines} />}
      />
      <Route path={'/team'} render={() => <Team />} />
      <Route path={'/'} render={() => <Vaccines vaccines={vaccines} />} />
    </Switch>
  )
}

export default Routes
