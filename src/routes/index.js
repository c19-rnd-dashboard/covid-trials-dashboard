import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import AssetsFiltered from './AssetsFiltered'
import { store } from '../store'
// import { ProdData } from '../mocks/assets'

const Routes = () => {
  const globalState = useContext(store)
  const { vaccines = [] } = globalState && globalState.state
  return (
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <AssetsFiltered assets={vaccines} title='Vaccines' />}
      />
      <Route path={'/'} render={() => <AssetsFiltered assets={vaccines} />} />
    </Switch>
  )
}

export default Routes
