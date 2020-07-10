import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-map-gl'
import styled from 'styled-components'

const StyledPopup = styled(Popup)`
  .mapboxgl-popup-tip {
    border-bottom-color: #656666 !important;
  }
  .mapboxgl-popup-content {
    padding: 0px;
  }
  .mapboxgl-popup-close-button {
    color: white;
    font-size: 20px;
  }
`

const StyledPopupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

const TopContainer = styled.div`
  background-color: #656666;
  color: white;
  width: -webkit-fill-available;
  text-align: left;
  padding: 20px;
  word-wrap: break-word;
  max-width: 363px;
`

const DetailsContainer = styled.div`
  background-color: #222224;
  width: -webkit-fill-available;
  text-align: left;
  padding: 10px;
  width: 383px;
`

const Key = styled.div`
  color: #8b8c8d;
  min-width: 40%;
  padding-right: 4px;
  text-align: right;
`

const Value = styled.div`
  color: #fff;
  min-width: 60%;
  max-width: 280px;
  padding-left: 4px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`

const StyledButton = styled.button`
  background-color: #666666;
  color: #d2d4d5;
  &:hover {
    color: #fff;
  }
  padding: 10px;
  border: none;
  font-size: 14px;
  width: 220px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 2px;
`

const PopUpDisplay = ({ popupInfo, onClose }) => {
  const [learnMoreOpen, setLearnMoreOpen] = useState(false)
  const isPopupAndClicked = popupInfo && popupInfo.clickedLocation.lng
  const handleClick = () => {
    setLearnMoreOpen(!learnMoreOpen)
  }
  useEffect(() => {
    setLearnMoreOpen(false)
  }, [isPopupAndClicked])
  if (popupInfo) {
    const {
      clickedLocation,
      phase,
      preferredName,
      trialRegistryLink,
      acceptsHealthySubjects,
      participation = {},
      sponsors,
    } = popupInfo
    const sponsorNames = sponsors.map(sponsor => sponsor.sponsorName).join(', ')
    const sponsorPlural = sponsors.length > 1 ? 'Sponsors' : 'Sponsor'
    return (
      <StyledPopup
        tipSize={5}
        anchor='top'
        longitude={clickedLocation.lng}
        latitude={clickedLocation.lat}
        closeOnClick={false}
        onClose={onClose}
      >
        <StyledPopupInfo>
          {learnMoreOpen ? (
            <>
              <TopContainer>
                {participation.name && (
                  <div style={{ fontSize: '20px' }}>
                    <b>{participation.name}</b>
                  </div>
                )}
                {participation.email && (
                  <div style={{ paddingTop: '10px' }}>
                    <a href={`mailto:${participation.email}`}>
                      {participation.email}
                    </a>
                  </div>
                )}
              </TopContainer>
              <DetailsContainer>
                <Row>
                  <Key>Website</Key>
                  <Value>
                    {participation.website ? (
                      <a
                        href={participation.website}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {participation.website}
                      </a>
                    ) : (
                      '__'
                    )}
                  </Value>
                </Row>
                <Row>
                  <Key>Notes</Key>
                  <Value>
                    {participation.notes ? participation.notes : '__'}
                  </Value>
                </Row>

                <Row>
                  <StyledButton onClick={handleClick}>
                    BACK TO DETAILS
                  </StyledButton>
                </Row>
              </DetailsContainer>
            </>
          ) : (
            <>
              <TopContainer>
                <div style={{ fontSize: '20px' }}>
                  Trial {sponsorPlural}: <b>{sponsorNames}</b>
                </div>
                <div style={{ paddingTop: '10px' }}>
                  Product: <b>{preferredName}</b>
                </div>
              </TopContainer>
              <DetailsContainer>
                <Row>
                  <Key>Phase</Key>
                  <Value>{phase}</Value>
                </Row>
                <Row>
                  <Key>Accepts Healthy Volunteers?</Key>
                  <Value>
                    {acceptsHealthySubjects === 'Yes' ? 'Yes' : 'No'}
                  </Value>
                </Row>

                <Row>
                  <Key>Trial Registry Link</Key>
                  <Value>
                    {trialRegistryLink ? (
                      <a
                        href={trialRegistryLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Link
                      </a>
                    ) : (
                      '__'
                    )}
                  </Value>
                </Row>

                <Row>
                  <StyledButton onClick={handleClick}>
                    HOW TO VOLUNTEER
                  </StyledButton>
                </Row>
              </DetailsContainer>
            </>
          )}
        </StyledPopupInfo>
      </StyledPopup>
    )
  }
  return null
}

PopUpDisplay.propTypes = {
  popupInfo: PropTypes.shape({
    chemicalName: PropTypes.string,
    currentStatus: PropTypes.string,
    sponsors: PropTypes.arrayOf(PropTypes.shape({})),
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
    trialRegistryLink: PropTypes.string,
    participation: PropTypes.shape({}),
  }),
  onClose: PropTypes.func,
}

PopUpDisplay.defaultProps = {
  popupInfo: null,
  onClose: null,
}

export default PopUpDisplay
