import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Vaccines from './AssetsFiltered'
import Team from './Team'
import ContactUs from './ContactUs'
import { useAssets } from 'utils/useAssets'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
import { Charts } from 'sections/Charts'
import Iframe from 'components/Iframe'

import {
  // spreadsheetDataSource,
  howYouCanHelpUrl,
  faqUrl,
  vaccineStatusSummaryUrl,
  // contactUsUrl,
} from 'constants/config'

const Routes = () => {
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
      <Route path={'/team'} render={() => <Team />} />{' '}
      <Route path={'/charts'} render={() => <Charts pins={filteredAssets} />} />
      <Route path={'/faq'} render={() => <Iframe url={faqUrl} title='FAQ' />} />
      <Route path={'/contact'} render={() => <ContactUs />} />
      <Route
        path={'/volunteer'}
        render={() => (
          <Iframe url={howYouCanHelpUrl} title='How and Why to Volunteer' />
        )}
      />
      <Route
        path={'/trialssummary'}
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
