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

const MapDiv = styled.div`
  width: 100%;
  height: 65vh;
`
const StyledAccordion = styled(AccordionSummary)`
  background-color: #25272a !important;
  color: white !important;
`

const StyledAccordionDetails = styled(AccordionDetails)`
  background-color: #25272a !important;
  color: white !important;
`

const HowYouCanHelp = () => (
  <Accordion>
    <StyledAccordion
      expandIcon={<ExpandMoreIcon color='primary' />}
      aria-controls='panel1a-content'
      id='panel1a-header'
    >
      <div>Are you interested in helping accelerate COVID-19 Research?</div>
    </StyledAccordion>
    <StyledAccordionDetails>
      <div style={{ textAlign: 'left' }}>
        In the map below, click on a pin near you to find a hospital or clinic
        running a clinical trial on COVID-19. If you are healthy, look under
        “Accepts Healthy Volunteers?” and check that it says Yes. Click the “How
        to Volunteer” button to find out how to potentially participate in the
        study. For more detailed instructions go to our How You Can Help page.
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
