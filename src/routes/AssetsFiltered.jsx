import React from 'react'
import PropTypes from 'prop-types'
import { MapContainer } from '../sections/MapAndMilestones'
import MaxWidth from 'components/MaxWidth'

const Assets = ({ assets }) => {
  return (
    <MaxWidth>
      <MapContainer
        pins={assets}
        // title={`${title} Map`}
        // handleSelectedId={handleSelectedId}
        // selectedAsset={selectedAsset}
      />
    </MaxWidth>
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
