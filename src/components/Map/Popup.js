import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-map-gl'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import {
  useTheme,
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  Divider,
  Link,
  Box,
} from '@material-ui/core'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import { useTranslation } from 'react-i18next'

const DontBreakOutLink = styled(Link)`
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`

const MobileOptimizedDisplay = styled.div`
  @media only screen and (max-width: 600px) {
    display: ${props =>
    props.alwaysShow || props.onlyMobile ? 'initial' : 'none'};
  }
  @media only screen and (min-width: 601px) {
    display: ${props => (props.onlyMobile ? 'none' : 'initial')};
  }
`

const DisplayField = ({
  label,
  content,
  bold,
  alwaysShow = false,
  onlyMobile = false,
}) => (
  <MobileOptimizedDisplay alwaysShow={alwaysShow} onlyMobile={onlyMobile}>
    <Typography
      color='textSecondary'
      style={{
        fontSize: '0.8rem',
      }}
    >
      {label}
    </Typography>
    <Typography
      style={{
        fontSize: '0.9rem',
        wordBreak: 'break-word',
      }}
      gutterBottom
    >
      {bold ? <b>{content}</b> : content}
    </Typography>
  </MobileOptimizedDisplay>
)

DisplayField.propTypes = {
  label: PropTypes.string,
  content: PropTypes.node,
  bold: PropTypes.bool,
  alwaysShow: PropTypes.bool,
  onlyMobile: PropTypes.bool,
}

const DividerWithMargin = styled(Divider)`
  margin: 1rem 0;
`

const PopUpDisplay = ({ popupInfo, onClose }) => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false)
  const theme = useTheme()
  const isPopupAndClicked = popupInfo && popupInfo.clickedLocation.lng
  const handleClick = () => {
    ReactGA.event({
      category: 'volunteer',
      action: 'How to volunteer clicked',
      label: 'Popup button, how to volunteer',
    })
    setLearnMoreOpen(!learnMoreOpen)
  }
  useEffect(() => {
    setLearnMoreOpen(false)
  }, [isPopupAndClicked])
  const { t } = useTranslation('mapPopup')

  if (popupInfo) {
    const {
      clickedLocation,
      phase,
      preferredName,
      registryLink,
      acceptsHealthySubjects,
      contact = [{}],
      sponsors,
    } = popupInfo
    const participation = contact[0]
    const sponsorNames = sponsors.map(sponsor => sponsor.sponsorName).join(', ')
    const sponsorPlural =
      sponsors.length > 1 ? t('sponsorPlural') : t('sponsorPlural')
    const firstSponsor = sponsors[0] && sponsors[0].sponsorName
    const StyledPopup = styled(Popup)`
      .mapboxgl-popup-content {
        padding: 0px;
        user-select: text;
        cursor: text;
      }
      .mapboxgl-popup-close-button {
        color: ${theme.palette.text.primary};
        font-size: ${theme.typography.fontSize};
      }
      .MuiPaper-root {
        min-width: 10rem !important;
      }
      @media only screen and (max-width: 601px) {
        .MuiPaper-root {
          max-width: 15rem !important;
        }
      }
      .MuiCardContent-root:last-child {
        padding-bottom: 2px;
      }
    `
    return (
      <StyledPopup
        tipSize={5}
        anchor='top'
        longitude={clickedLocation.lng}
        latitude={clickedLocation.lat}
        closeOnClick={false}
        onClose={onClose}
      >
        <Card style={{ maxWidth: '26rem', minWidth: '20rem' }}>
          {learnMoreOpen ? (
            <>
              <CardContent>
                {participation.name && (
                  <DisplayField
                    alwaysShow
                    label={t('name')}
                    content={participation.name}
                  />
                )}
                {participation.website && (
                  <DisplayField
                    label={t('website')}
                    alwaysShow
                    content={
                      <Link
                        onClick={() =>
                          ReactGA.event({
                            category: 'volunteer website',
                            action: 'Volunteer website link clicked',
                            label: `${participation.website} clicked`,
                          })
                        }
                        href={participation.website}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          color: theme.palette.primary.main,
                          textDecoration: 'underline',
                        }}
                      >
                        {participation.website}
                      </Link>
                    }
                  />
                )}
                {participation.email && (
                  <DisplayField
                    alwaysShow
                    label={t('email')}
                    content={
                      <DontBreakOutLink
                        onClick={() =>
                          ReactGA.event({
                            category: 'email link',
                            action: 'Volunteer email link clicked',
                            label: `${participation.email} clicked`,
                          })
                        }
                        href={`mailto:${participation.email}?subject=I am interested in volunteering for your clinical trial&body=Hello,%0d%0dI found your study on www.coviddash.org and I am interested in participating in your clinical trial for a COVID-19 vaccine. I am a healthy subject who has not had COVID-19 and is not experiencing COVID-19 symptoms. I am located in ((ENTER CITY)) and can be reached at this email. Please let me know the next steps for potentially being screened and enrolled in this study.`}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          color: theme.palette.primary.main,
                          textDecoration: 'underline',
                        }}
                      >
                        {participation.email}
                      </DontBreakOutLink>
                    }
                  />
                )}
                <DisplayField
                  label={t('phoneNumber')}
                  alwaysShow
                  content={participation.phone}
                />
                {participation.notes && (
                  <DisplayField
                    label={t('notes')}
                    content={participation.notes}
                    alwaysShow
                  />
                )}
              </CardContent>
              <CardActions>
                <Button onClick={handleClick} variant='contained'>
                  {t('backToDetails')}
                </Button>
              </CardActions>
            </>
          ) : (
            <CardContent>
              <DisplayField
                // alwaysShow
                label={t('acceptsHealthyVolunteers')}
                content={
                  acceptsHealthySubjects === 'Yes' ? (
                    <Box
                      color='success.main'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <CheckCircleIcon style={{ paddingRight: '2px' }} />
                      {t('yes')}
                    </Box>
                  ) : (
                    t('no')
                  )
                }
              />
              <DisplayField label={`${sponsorPlural}`} content={sponsorNames} />
              <DisplayField
                onlyMobile
                label={t('trialSponsor')}
                content={firstSponsor}
              />
              <DisplayField label={t('product')} content={preferredName} />
              <DividerWithMargin />
              <DisplayField label={t('phase')} content={phase} alwaysShow />
              {registryLink && (
                <DisplayField
                  label={t('trialRegistryLinks')}
                  alwaysShow
                  content={
                    Array.isArray(registryLink) ? (
                      registryLink.map((link, index) => (
                        <Link
                          key={`${link}${index}`}
                          onClick={() =>
                            ReactGA.event({
                              category: 'Trial Registry Link',
                              action: 'Trial Registry link clicked',
                              label: `Trial Registry ${link} clicked`,
                            })
                          }
                          href={link}
                          target='_blank'
                          rel='noopener noreferrer'
                          style={{
                            color: theme.palette.primary.main,
                            textDecoration: 'underline',
                            marginRight: '5px',
                          }}
                        >
                          {index > 0 ? `Link ${index + 1}` : 'Link'}
                        </Link>
                      ))
                    ) : (
                      <Link
                        onClick={() =>
                          ReactGA.event({
                            category: 'Trial Registry Link',
                            action: 'Trial Registry link clicked',
                            label: `Trial Registry ${registryLink} clicked`,
                          })
                        }
                        href={registryLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        style={{
                          color: theme.palette.primary.main,
                          textDecoration: 'underline',
                        }}
                      >
                        {t('clickHere')}
                      </Link>
                    )
                  }
                />
              )}
              <CardActions>
                <Button
                  onClick={handleClick}
                  variant='contained'
                  color='secondary'
                >
                  {t('howToVolunteer')}
                </Button>
              </CardActions>
            </CardContent>
          )}
        </Card>
      </StyledPopup>
    )
  }
  return null
}

PopUpDisplay.propTypes = {
  popupInfo: PropTypes.shape({
    chemicalName: PropTypes.string,
    currentStatus: PropTypes.string,
    sponsors: PropTypes.arrayOf(
      PropTypes.shape({ sponsorName: PropTypes.string })
    ),
    trialId: PropTypes.string,
    status: PropTypes.string,
    brandName: PropTypes.string,
    clickedLocation: PropTypes.shape({
      lng: PropTypes.number,
      lat: PropTypes.number,
      name: PropTypes.string,
    }),
    phase: PropTypes.string,
    preferredName: PropTypes.string,
    indication: PropTypes.string,
    therapeuticApproach: PropTypes.string,
    repurposed: PropTypes.string,
    acceptsHealthySubjects: PropTypes.string,
    registryLink: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
    contact: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  onClose: PropTypes.func,
}

PopUpDisplay.defaultProps = {
  popupInfo: null,
  onClose: null,
}

export default PopUpDisplay
