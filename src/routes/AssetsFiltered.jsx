import React from 'react'
import PropTypes from 'prop-types'
import MapAndMilestones from '../sections/MapAndMilestones'

const Assets = ({ assets, title }) => {
  return (
    <MapAndMilestones
      pins={assets}
      title={`${title} Map`}
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
