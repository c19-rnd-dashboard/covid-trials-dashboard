import React from 'react'
import PropTypes from 'prop-types'
import { MilestonesGraph } from './MilestonesGraph'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import { status, phasesInOrder } from './constants'
import { WrapperDiv, Title } from './MilestonesGraphContainer.styles'
import Legend from '../Legend/Legend'
import { isValidDate } from 'utils/utils'
import { InfiniteScrollWithData } from 'components/InfiniteScrollWithData'
import { useMemo } from 'react'

export const getMarketDate = ({ milestones } = {}) => {
  const { values } = milestones.find(({ name } = {}) => name === 'Actual') || {}
  if (!values) {
    return ''
  }
  const { start, name } = values[values.length - 1] || {}
  return { start, name }
}

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
        const fstOrder = phasesInOrder.indexOf(fst.name)
        const sndOrder = phasesInOrder.indexOf(snd.name)
        if (fstOrder > sndOrder) {
          return -1
        } else if (fstOrder < sndOrder) {
          return 1
        } else {
          if (!isValidDate(fst.start)) {
            return 1
          } else if (!isValidDate(snd.start)) {
            return -1
          }
          return new Date(fst.start).getTime() - new Date(snd.start).getTime()
        }
      })
  }, [pins])
  const { productId: selectedProductId } = selectedAsset || {}
  // eslint-disable-next-line react/prop-types
  const GraphWrapper = ({ milestones = [], preferredName, productId }) => (
    <WrapperDiv key={productId} onClick={() => handleSelectedId(productId)}>
      <Title active={selectedProductId === productId}>
        {/* eslint-disable-next-line react/prop-types */}
        {preferredName.replace(/_/g, ' ')}
      </Title>
      <MilestonesGraph milestones={milestones} />
    </WrapperDiv>
  )
  return (
    <>
      <Legend />
      <InfiniteScrollWithData
        component={GraphWrapper}
        data={milestones}
        initialLength={10}
        step={10}
      />
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
