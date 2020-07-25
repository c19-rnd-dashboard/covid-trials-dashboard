import React from 'react'
import PropTypes from 'prop-types'
import Tabs from '../../components/Tabs'
import Map from '../../components/Map'
import Tile from '../../components/Tile/Tile'
import styled from 'styled-components'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Charts } from 'sections/Charts'
import { howYouCanHelpUrl } from 'constants/config'

const MapDiv = styled.div`
  width: 100%;
  height: 65vh;
`
const StyledAccordion = styled(AccordionSummary)`
  background-color: #25272a !important;
  color: var(--font-color) !important;
`

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #25272a !important;
  color: var(--font-color) !important;
`

const HowYouCanHelp = () => (
  <Accordion>
    <StyledAccordion
      expandIcon={<ExpandMoreIcon color='primary' />}
      aria-controls='panel1a-content'
      id='panel1a-header'
    >
      <div>
        Are you interested in potentially volunteering for a COVID-19 trial?
      </div>
    </StyledAccordion>
    <StyledAccordionDetails>
      <div style={{ textAlign: 'left' }}>
        <ol>
          <li>
            In the map below, click on a pin near you to find a hospital or
            clinic running a clinical trial on COVID-19.{' '}
          </li>
          <li>
            If you are healthy, look under{' '}
            <span style={{ fontWeight: 'bold' }}>
              “Accepts Healthy Volunteers?”
            </span>{' '}
            and check that it says{' '}
            <span style={{ fontWeight: 'bold' }}>Yes</span>{' '}
          </li>
          <li>
            Click the{' '}
            <span style={{ fontWeight: 'bold' }}>“How to Volunteer”</span>{' '}
            button to find out how to potentially participate in the study.{' '}
          </li>
        </ol>
        <p>
          For more detailed instructions go to our{' '}
          <a href={howYouCanHelpUrl} rel='noopener noreferrer' target='_blank'>
            How You Can Help page
          </a>
        </p>
        <p>
          If you are in the US make sure to complete this{' '}
          <a
            href='https://www.coronaviruspreventionnetwork.org/clinical-study-volunteer/'
            rel='noopener noreferrer'
            target='_blank'
          >
            NIH form
          </a>
        </p>
        <p>
          If you are in the UK, complete this{' '}
          <a
            href='https://www.nhs.uk/conditions/coronavirus-covid-19/research/coronavirus-vaccine-research/'
            rel='noopener noreferrer'
            target='_blank'
          >
            NHS form
          </a>
        </p>
      </div>
    </StyledAccordionDetails>
  </Accordion>
)

const MapAndMilestones = ({ pins, handleSelectedId, selectedAsset }) => {
  const tabs = [
    {
      title: 'Volunteer Locations',
      content: (
        <Tile>
          <HowYouCanHelp />

          <MapDiv>
            <Map pins={pins} handleSelectedId={handleSelectedId} />
          </MapDiv>
        </Tile>
      ),
    },
    {
      title: 'Timeline',
      content: (
        <MilestonesGraphContainer
          selectedAsset={selectedAsset}
          pins={pins}
          handleSelectedId={handleSelectedId}
        />
      ),
    },
    {
      title: 'Charts',
      content: <Charts pins={pins} />,
    },
  ]

  return <Tabs tabs={tabs} />
}

MapAndMilestones.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
  handleSelectedId: PropTypes.func,
  selectedAsset: PropTypes.shape({}),
}

MapAndMilestones.defaultProps = {
  pins: [],
  selectedAsset: null,
}

export default MapAndMilestones
