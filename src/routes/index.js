import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './AssetsFiltered'
import Team from './Team'
import ContactUs from './ContactUs'
import { useAssets } from 'utils/useAssets'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
import { Charts } from 'sections/Charts'
import Iframe from 'components/Iframe'
import { VaccinesOverview } from 'components/VaccinesOverview'
import HowToHelp from './HowYouCanHelp'

import {
  // spreadsheetDataSource,
  vaccineStatusSummaryUrl,
  // contactUsUrl,
} from 'constants/config'
import { FAQs } from 'sections/FAQs'

const Routes = () => {
  const { filteredAssets } = useAssets()
  return (
    <Switch>
      <Route path={'/vaccines/overview'} component={VaccinesOverview} />
      <Route
        path={'/coronavirus-volunteer-map'}
        render={() => <Vaccines assets={filteredAssets} />}
      />
      <Route
        path={'/coronavirus-timeline-tracker'}
        render={() => <MilestonesGraphContainer pins={filteredAssets} />}
      />
      <Route
        path={'/covid-trial-vaccine-charts'}
        render={() => <Charts pins={filteredAssets} />}
      />
      <Route path={'/team'} render={() => <Team />} />{' '}
      <Route path={'/faq'} component={FAQs} />
      <Route path={'/contact'} render={() => <ContactUs />} />
      <Route
        path={'/volunteer-covid-trial'}
        render={() => (
          // <Iframe url={howYouCanHelpUrl} title='How and Why to Volunteer' />
          <HowToHelp />
        )}
      />
      <Route
        path={'/covid-trials-summary'}
        render={() => (
          <Iframe
            url={vaccineStatusSummaryUrl}
            title='Vaccine Trials Summary'
          />
        )}
      />
      <Route path={'/'} render={() => <Vaccines assets={filteredAssets} />} />
    </Switch>
  )
}

export default Routes
