import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '../../components/Tabs'
import Map from '../../components/Map'
import Tile from '../../components/Tile/Tile'
import styled from 'styled-components'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
import { Charts } from 'sections/Charts'
import { howYouCanHelpUrl } from 'constants/config'
import { Button, Dialog, DialogTitle, Link } from '@material-ui/core'
import howToVolunteerExampleGif from '../../assets/ExampleHowToVolunteer.gif'

const MapDiv = styled.div`
  width: 100%;
  height: 65vh;
`
const StyledInstructions = styled.div`
  padding: 0.3em 1em;
  margin-bottom: 0.5em;
`

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`

const HowYouCanHelp = () => {
  const [exampleOpen, setExampleOpen] = useState(false)
  return (
    <StyledInstructions>
      <div style={{ textAlign: 'left' }}>
        <p>
          Help save lives by volunteering for a COVID-19 vaccine or treatment trial near you!
        </p>
        <p>
          Currently, over 200 vaccine and 500 treatment trials are desparately seeking volunteers to help scientists and doctors save lives by agreeing to receive early vaccinse and treatments. Each volunteer will have their healthcare and travel costs compensated, and may receive an additional stipend for participation — up to $1200! 
      </div>
    </StyledInstructions>
  )
}

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

<div style={{ textAlign: 'left' }}>
   <p>
          For more detailed instructions go to our{' '}
          <Link
            href={howYouCanHelpUrl}
            rel='noopener noreferrer'
            target='_blank'
            color='secondary'
          >
            How You Can Help page
          </Link>
          <br />
          For a greater chance of being selected, make sure to complete this{' '}
          <Link
            href='https://www.coronaviruspreventionnetwork.org/clinical-study-volunteer/'
            rel='noopener noreferrer'

            target='_blank'
            color='secondary'
          >
            NIH form
          </Link>
          if you're in the US, or if you are in the UK, complete this{' '}
          <Link
            href='https://www.nhs.uk/conditions/coronavirus-covid-19/research/coronavirus-vaccine-research/'
            rel='noopener noreferrer'
            target='_blank'
            color='secondary'
          >
            NHS form
          </Link>
        </p>
        <br/>
        Not sure how to use this site?
        <Button
          onClick={() => setExampleOpen(true)}
          variant='contained'
          color='primary'
        >
          See an Example 
        </Button>
        <Dialog
          maxWidth='lg'
          onClose={() => setExampleOpen(false)}
          open={exampleOpen}
        >
          <DialogTitle>How to Volunteer</DialogTitle>
          <StyledImg
            src={howToVolunteerExampleGif}
            alt='How to volunteer example gif'
          />
        </Dialog>
</div>
