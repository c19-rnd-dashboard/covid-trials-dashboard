import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer } from '../sections/MapAndMilestones'

const Assets = ({ assets }) => {
  return (
    <MapContainer
      pins={assets}
      // title={`${title} Map`}
      // handleSelectedId={handleSelectedId}
      // selectedAsset={selectedAsset}
    />
  )
}

Assets.propTypes = {
  assets: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
}

Assets.defaultProps = {
  assets: [],
  title: 'Vaccines',
}

export default Assets
