import React from 'react'
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
  if (popupInfo) {
    const {
      clickedLocation,
      phase,
      preferredName,
      brandName,
      indication,
      therapeuticApproach,
      repurposed,
      studyStart,
      studyEnd,
      heathyVolunteer,
      learnMore,
    } = popupInfo
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
          <TopContainer>
            <div style={{ fontSize: '20px' }}>
              <b>{preferredName}</b>
            </div>
            <div style={{ paddingTop: '10px' }}>{clickedLocation.name}</div>
          </TopContainer>
          <DetailsContainer>
            {brandName && (
              <Row>
                <Key>Brand Name</Key>
                <Value>{brandName}</Value>
              </Row>
            )}
            {indication && (
              <Row>
                <Key>Indication</Key>
                <Value>{indication}</Value>
              </Row>
            )}
            {therapeuticApproach && therapeuticApproach !== 'unknown' && (
              <Row>
                <Key>Therapeutic Approach</Key>
                <Value>{therapeuticApproach}</Value>
              </Row>
            )}
            {repurposed && (
              <Row>
                <Key>Repurposed or New</Key>
                <Value>{repurposed}</Value>
              </Row>
            )}
            <Row>
              <Key>Phase</Key>
              <Value>{phase}</Value>
            </Row>
            <Row>
              <Key>Study Start</Key>
              <Value>{studyStart}</Value>
            </Row>
            <Row>
              <Key>Study End</Key>
              <Value>{studyEnd}</Value>
            </Row>
            <Row>
              <Key>Healthy Volunteer</Key>
              <Value>{heathyVolunteer}</Value>
            </Row>
            <Row>
              <a href={learnMore} target='_blank' rel='noopener noreferrer'>
                <StyledButton>LEARN MORE</StyledButton>
              </a>
            </Row>
          </DetailsContainer>
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
    studyStart: PropTypes.string, // AWAITING FROM API
    studyEnd: PropTypes.string, // AWAITING FROM API
    heathyVolunteer: PropTypes.bool, // AWAITING FROM API
    learnMore: PropTypes.string, // AWAITING FROM API
  }),
  onClose: PropTypes.func,
}

PopUpDisplay.defaultProps = {
  popupInfo: null,
  onClose: null,
}

export default PopUpDisplay
