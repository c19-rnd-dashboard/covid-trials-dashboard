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
  min-width: 330px;
`

const StyledPopupInfo = styled.div`
  /* color: blue; */
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
`

const DetailsContainer = styled.div`
  background-color: #222224;
  width: -webkit-fill-available;
  text-align: left;
  padding: 20px;
`

const Key = styled.div`
  color: #8b8c8d;
  min-width: 50%;
  padding-right: 4px;
  text-align: right;
`

const Value = styled.div`
  color: #fff;
  min-width: 50%;
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
    const { clickedLocation, sponsors, phase, preferredName } = popupInfo
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
            <div style={{ fontSize: '20px' }}>{preferredName}</div>
            <div style={{ paddingTop: '10px' }}>{clickedLocation.name}</div>
            {/* <div>Address 2
            </div> */}
          </TopContainer>
          <DetailsContainer>
            <Row>
              <Key>Phase</Key>
              <Value>{phase}</Value>
            </Row>
            <Row>
              <Key>Condition</Key>
              <Value>The Value</Value>
            </Row>
            <Row>
              <Key>Sponsor(s)</Key>
              <Value>
                {sponsors.map(sponsor => sponsor.sponsorName).join(', ')}
              </Value>
            </Row>
            <Row>
              <Key>Study Start</Key>
              <Value>The Value</Value>
            </Row>
            <Row>
              <Key>Study End</Key>
              <Value>The Value</Value>
            </Row>
            <Row>
              <Key>Healthy Volunteer</Key>
              <Value>The Value</Value>
            </Row>
            <Row>
              <StyledButton>LEARN MORE</StyledButton>
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
  }),
  onClose: PropTypes.func,
}

PopUpDisplay.defaultProps = {
  popupInfo: null,
  onClose: null,
}

export default PopUpDisplay
