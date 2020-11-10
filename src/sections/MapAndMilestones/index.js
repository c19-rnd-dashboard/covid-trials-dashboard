import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tabs from '../../components/Tabs'
import Map from '../../components/Map'
import Tile from '../../components/Tile/Tile'
import styled from 'styled-components'
import { MilestonesGraphContainer } from 'components/MilestonesGraph/MilestonesGraphContainer'
import { Charts } from 'sections/Charts'
import { howYouCanHelpUrl } from 'constants/config'
import {
  Button,
  Dialog,
  DialogTitle,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'
import howToVolunteerExampleGif from '../../assets/ExampleHowToVolunteer.gif'
import { useTranslation } from 'react-i18next'
import { HomeSections } from 'sections/HomeSections'
import MaxWidth from 'components/MaxWidth'

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
        <h1 style={{ fontSize: '18px' }}>How to Volunteer</h1>
        <ol>
          <li>
            Click on a pin near you to find the nearest clinical trial for
            COVID-19 vaccines.{' '}
          </li>
          <li>
            Note: if you have not already had Coronavirus, filter the map by{' '}
            <span style={{ fontWeight: 'bold' }}>
              “Accepts Healthy Volunteers?”
            </span>{' '}
            and select <span style={{ fontWeight: 'bold' }}>Yes</span>{' '}
          </li>
          <li>
            Click the{' '}
            <span style={{ fontWeight: 'bold' }}>“How to Volunteer”</span>{' '}
            button on the selected marker to find out how to potentially
            participate in the study.{' '}
          </li>
        </ol>
        <Button
          onClick={() => setExampleOpen(true)}
          variant='contained'
          color='primary'
        >
          Watch an Example (15 s)
        </Button>
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
          If you are in the US make sure to complete this{' '}
          <Link
            href='https://www.coronaviruspreventionnetwork.org/clinical-study-volunteer/'
            rel='noopener noreferrer'
            target='_blank'
            color='secondary'
          >
            NIH form
          </Link>
          <br />
          If you are in the UK, complete this{' '}
          <Link
            href='https://www.nhs.uk/conditions/coronavirus-covid-19/research/coronavirus-vaccine-research/'
            rel='noopener noreferrer'
            target='_blank'
            color='secondary'
          >
            NHS form
          </Link>
        </p>
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
    </StyledInstructions>
  )
}

export const MapContainer = ({ pins }) => {
  const theme = useTheme()
  const isBigEnough = useMediaQuery(theme.breakpoints.up('sm'))
  const { t } = useTranslation()

  return (
    <div>
      <MaxWidth>
        <Typography
          variant='h1'
          style={{ fontSize: '2em', marginTop: '1.3rem', marginLeft: '0.5rem' }}
          gutterBottom
        >
          {t('title')}
        </Typography>
        {isBigEnough && (
          <Typography
            style={{
              fontSize: '1.3em',
              marginBottom: '1.3rem',
              marginLeft: '0.5rem',
            }}
            gutterBottom
            variant='h2'
          >
            {t('subtitle')}
          </Typography>
        )}
        <MapDiv>
          <Map pins={pins} />
        </MapDiv>
      </MaxWidth>
      <HomeSections />
    </div>
  )
}

const MapAndMilestones = ({ pins }) => {
  const tabs = [
    {
      title: 'Volunteer Locations',
      content: (
        <Tile>
          <MapDiv>
            <Map pins={pins} />
          </MapDiv>
          <HowYouCanHelp />
        </Tile>
      ),
    },
    {
      title: 'Timeline',
      content: (
        <MilestonesGraphContainer
          // selectedAsset={selectedAsset}
          pins={pins}
          // handleSelectedId={handleSelectedId}
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

MapContainer.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.shape({})),
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
