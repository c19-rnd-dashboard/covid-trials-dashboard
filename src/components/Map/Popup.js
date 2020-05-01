import React from 'react'
import PropTypes from 'prop-types'
import { Popup } from 'react-map-gl'
import styled from 'styled-components'

const StyledPopupInfo = styled.div`
  color: blue;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`

const PopUpDisplay = ({ popupInfo, onClose }) => {
  console.log(popupInfo, 'info')
  if (popupInfo) {
    const {
      chemicalName,
      clickedLocation,
      currentStatus,
      sponsors,
      status,
      trialId,
      brandName,
    } = popupInfo
    return (
      <Popup
        tipSize={5}
        anchor='top'
        longitude={clickedLocation.lon}
        latitude={clickedLocation.lat}
        closeOnClick={false}
        onClose={onClose}
      >
        <StyledPopupInfo>
          {/* TODO: This is pretty unstyled.  Waiting to see what we want to populate this with */}
          <div>{chemicalName}</div>
          <div>Status: {currentStatus}</div>
          <div>
            Sponsors:{' '}
            {sponsors.map(sponsor => (
              <div key={sponsor.sponsorId}>{sponsor.sponsorName}</div>
            ))}
          </div>
          <div>{status}</div>
          <div>{trialId}</div>
          <div>{brandName}</div>
        </StyledPopupInfo>
      </Popup>
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
      lon: PropTypes.number,
      lat: PropTypes.number,
    }),
  }),
  onClose: PropTypes.func,
}

PopUpDisplay.defaultProps = {
  popupInfo: null,
  onClose: null,
}

export default PopUpDisplay
