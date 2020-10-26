import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './AssetsFiltered'
// import { store } from '../store'
import Team from './Team'
import { useAssets } from 'utils/useAssets'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
import { Charts } from 'sections/Charts'

// import { ProdData } from '../mocks/assets'

const Routes = () => {
  // const globalState = useContext(store)
  const { filteredAssets } = useAssets()
  return (
    <Switch>
      <Route
        path={'/vaccines'}
        render={() => <Vaccines assets={filteredAssets} />}
      />
      <Route
        path={'/timelines'}
        render={() => <MilestonesGraphContainer pins={filteredAssets} />}
      />
      <Route path={'/charts'} render={() => <Charts pins={filteredAssets} />} />
      <Route path={'/team'} render={() => <Team />} />
      <Route path={'/'} render={() => <Vaccines assets={filteredAssets} />} />
    </Switch>
  )
}

export default Routes
