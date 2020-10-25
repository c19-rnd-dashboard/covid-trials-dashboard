import React from 'react'
import PropTypes from 'prop-types'
import MapAndMilestones from '../sections/MapAndMilestones'
import styled from 'styled-components'

const CenterMain = styled.div`
  display: flex;
  justify-content: center;
`
const MainWidth = styled.div`
  display: block;
  width: 1100px;
  max-width: 98vw;
`

const Assets = ({ assets, title }) => {
  return (
    <CenterMain>
      <MainWidth>
        <MapAndMilestones
          pins={assets}
          title={`${title} Map`}
          // handleSelectedId={handleSelectedId}
          // selectedAsset={selectedAsset}
        />
      </MainWidth>
    </CenterMain>
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
