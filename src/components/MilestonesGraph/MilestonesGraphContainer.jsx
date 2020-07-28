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
import InfiniteScroll from 'react-infinite-scroll-component'
import { MilestonesGraph } from './MilestonesGraph'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import { status } from './constants'
import { WrapperDiv, Title } from './MilestonesGraphContainer.styles'
import Legend from '../Legend/Legend'
import { isValidDate } from 'utils/utils'
import { InfiniteScrollWithData } from 'components/InfiniteScrollWithData'
import { useMemo } from 'react'

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
  const milestones = useMemo(() => {
    return pins
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
  }, [pins])
  const { productId: selectedProductId } = selectedAsset || {}
  const GraphWrapper = ({ milestones = [], preferredName, productId }) => (
    <WrapperDiv key={productId} onClick={() => handleSelectedId(productId)}>
      <Title active={selectedProductId === productId}>
        {preferredName.replace(/_/g, ' ')}
      </Title>
      <MilestonesGraph milestones={milestones} />
    </WrapperDiv>
  )
  return (
    <>
      <Legend />
      <InfiniteScrollWithData component={GraphWrapper} data={milestones} />
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
