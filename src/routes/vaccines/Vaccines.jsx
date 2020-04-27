import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import VaccinesMap from './VaccinesMap'
import VaccinesMilestones from './VaccinesMilestones'

function Vaccines() {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.url}/map`} component={VaccinesMap} />
      <Route path={`${match.url}/milestones`} component={VaccinesMilestones} />
    </Switch>
  )
}

export default Vaccines
