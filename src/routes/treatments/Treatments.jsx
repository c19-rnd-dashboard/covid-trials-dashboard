import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'

import TreatmentsMap from './TreatmentsMap'
import TreatmentsMilestones from './TreatmentsMilestones'

function Treatments() {
  const match = useRouteMatch()
  return (
    <Switch>
      <Route path={`${match.url}/map`} component={TreatmentsMap} />
      <Route
        path={`${match.url}/milestones`}
        component={TreatmentsMilestones}
      />
    </Switch>
  )
}

export default Treatments
