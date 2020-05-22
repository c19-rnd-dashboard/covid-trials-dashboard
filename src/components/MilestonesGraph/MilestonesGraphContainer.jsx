import React from 'react'
import { MilestonesGraph } from './MilestonesGraph'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import { status } from './constants'
import { WrapperDiv, Title } from './MilestonesGraphContainer.styles'

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
  return milestones.map(({ milestones = [], preferredName, productId }) => (
    <WrapperDiv key={productId} onClick={() => handleSelectedId(productId)}>
      <Title active={selectedProductId === productId}>
        {preferredName.replace(/_/g, ' ')}
      </Title>
      <MilestonesGraph milestones={milestones} />
    </WrapperDiv>
  ))
}
