import React from 'react'
import PropTypes from 'prop-types'
import { MilestonesGraph } from './MilestonesGraph'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import { status, phasesInOrder } from './constants'
import {
  WrapperDiv,
  // Title,
  StickyPaper,
} from './MilestonesGraphContainer.styles'
import Legend from '../Legend/Legend'
import { isValidDate } from 'utils/utils'
import { InfiniteScrollWithData } from 'components/InfiniteScrollWithData'
import { useMemo } from 'react'
import { useState } from 'react'
import { Paper } from '@material-ui/core'
import MaxWidth from 'components/MaxWidth'

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
  // handleSelectedId,
  // selectedAsset = {},
}) => {
  const [phase, setPhase] = useState(null)
  const handlePhaseSelector = selectedPhase => {
    if (phase && phase.id === selectedPhase.id) {
      return setPhase(null)
    } else {
      setPhase(selectedPhase)
    }
  }
  const milestones = useMemo(() => {
    return pins
      .filter(({ preferredName }) => !RegExp('BCG').test(preferredName)) // quick fix to hide a specific product
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
  // const { productId: selectedProductId } = selectedAsset || {}
  // eslint-disable-next-line react/prop-types
  const GraphWrapper = ({ milestones = [], preferredName, productId }) => (
    <WrapperDiv key={productId}>
      {/* <Title active={selectedProductId === productId}> */}
      {/* eslint-disable-next-line react/prop-types */}
      {preferredName.replace(/_/g, ' ')}
      {/* </Title> */}
      <MilestonesGraph milestones={milestones} />
    </WrapperDiv>
  )
  return (
    <MaxWidth>
      <h1 style={{ fontSize: '36px' }}>
        {' '}
        Coronavirus (COVID-19) Vaccination Timeline Phase Tracker{' '}
      </h1>
      <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>
        {' '}
        When will there be Coronavirus vaccine? What countries and companies are
        working on vaccine candidates and what phase are they in? Stay updated
        with our Coronavirus Vaccine Candidate Timeline Tracker by phase.
      </h1>

      <Paper>
        <StickyPaper>
          <Legend onChange={handlePhaseSelector} selected={phase} />
        </StickyPaper>
        <InfiniteScrollWithData
          component={GraphWrapper}
          data={milestones}
          initialLength={10}
          step={10}
        />
      </Paper>
    </MaxWidth>
  )
}

MilestonesGraphContainer.propTypes = {
  pins: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleSelectedId: PropTypes.func.isRequired,
  // selectedAsset: PropTypes.shape({}),
}

MilestonesGraphContainer.defaultProps = {
  // selectedAsset: {},
}
