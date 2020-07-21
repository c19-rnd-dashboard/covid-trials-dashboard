import React from 'react'
import PropTypes from 'prop-types'
import {
  pipe,
  find,
  chain,
  map,
  fromMaybe,
  last,
  Nothing,
  Just,
} from 'sanctuary'
import { MilestonesGraph } from './MilestonesGraph'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import { status } from './constants'
import { WrapperDiv, Title } from './MilestonesGraphContainer.styles'
import Legend from '../Legend/Legend'
import { isValidDate } from 'utils/utils'

const getMarketDate = pipe([
  ({ milestones }) => milestones,
  find(({ name } = {}) => name === 'Optimistic'),
  map(({ values }) => values),
  chain(last),
  chain(({ start }) => (isValidDate(start) ? Just(start) : Nothing)),
  fromMaybe(''),
])

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
    .sort((a, b) => {
      const fst = getMarketDate(a)
      const snd = getMarketDate(b)
      return new Date(fst).getTime() - new Date(snd).getTime()
    })
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
