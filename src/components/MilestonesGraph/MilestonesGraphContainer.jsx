import React from 'react'
import PropTypes from 'prop-types'
import { MilestonesGraph } from './MilestonesGraph'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import { status } from './constants'
import { WrapperDiv, Title } from './MilestonesGraphContainer.styles'
import Legend from '../Legend/Legend'

const { skipped } = status

export const MilestonesGraphContainer = ({
  pins = [],
  handleSelectedId,
  selectedAsset = {},
}) => {
  const milestones = pins
    .filter(
      ({ milestones = [] }) =>
        milestones.filter(({ status }) => status !== skipped).length > 0
    )
    .map(asset => ({
      ...asset,
      milestones: mapAssetToMilestones(new Date().toISOString())(asset),
    }))
  const { productId: selectedProductId } = selectedAsset || {}
  return (
    <>
      <Legend />
      <>
        {milestones.map(({ milestones = [], preferredName, productId }) => (
          <WrapperDiv
            key={productId}
            onClick={() => handleSelectedId(productId)}
          >
            <Title active={selectedProductId === productId}>
              {preferredName.replace(/_/g, ' ')}
            </Title>
            <MilestonesGraph milestones={milestones} />
          </WrapperDiv>
        ))}
      </>
    </>
  )
}

MilestonesGraphContainer.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSelectedId: PropTypes.func.isRequired,
  selectedAsset: PropTypes.shape({}),
}

MilestonesGraphContainer.defaultProps = {
  selectedAsset: {},
}
