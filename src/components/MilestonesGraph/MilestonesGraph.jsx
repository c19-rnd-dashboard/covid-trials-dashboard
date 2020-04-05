import React from 'react'
import PropTypes from 'prop-types'
import { StackedBar } from '../StackedBar/StackedBar'
import { MilestonesTooltip } from '../MilestonesTooltip'
import { BarIndicator } from '../BarIndicator'
import moment from 'moment'
import './MilestonesGraph.css'

const colorBgStyles = ['blue', 'red', 'yellow', 'purple', 'lightblue']

const propTypes = {
  milestones: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
            .isRequired,
          start: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.instanceOf(moment),
            PropTypes.string,
          ]).isRequired,
          end: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.instanceOf(moment),
            PropTypes.string,
          ]).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export const getAllDatesFromMilestones = milestones =>
  milestones
    .map(({ values }) => values.map(({ start, end }) => ({ start, end })))
    .flat()

export const getEarliestDate = dates => {
  const [earliest] = dates
    .slice()
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
  return earliest
}

export const getLatestDate = dates => {
  const [latest] = dates
    .slice()
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .reverse()
  return latest
}

export const getTotalMilestoneDurationInDays = ({ values }) => {
  const start = getEarliestDate(values.map(({ start }) => start))
  const end = getLatestDate(values.map(({ end }) => end))
  const duration = moment.duration(moment(end).diff(moment(start))).as('days')
  return Math.floor(Math.abs(duration))
}

export const MilestonesGraph = ({ milestones }) => {
  const dates = getAllDatesFromMilestones(milestones)

  const earliestDate = getEarliestDate(dates.map(({ start }) => start))
  const latestDate = getLatestDate(dates.map(({ end }) => end))
  const [actualMilestone = []] = milestones.filter(
    ({ name }) => name.toLowerCase() === 'actual'
  )
  const elapsedDays = getTotalMilestoneDurationInDays(actualMilestone)
  return (
    <div className='milestones-graph'>
      <div className='labels'>
        {milestones.map(({ name }) => (
          <div key={name} data-test-id='label' className='label'>
            {name}
          </div>
        ))}
      </div>
      <div className='bars'>
        {milestones.map(({ name, values }, i, self) => (
          <div key={name} data-test-id='bar' className='bar'>
            <StackedBar
              items={values}
              tooltip={({ start, end }) => (
                <MilestonesTooltip startDate={start} endDate={end} />
              )}
              colorBgStyles={colorBgStyles}
              indicator={
                i === self.length - 1
                  ? () => (
                    <BarIndicator>
                      <div>Elapsed Time</div>
                      <div>{elapsedDays} days</div>
                    </BarIndicator>
                  )
                  : () => {}
              }
            />
          </div>
        ))}
        <div data-test-id='x-axis' className='x-axis'>
          <div className='dates'>
            <div
              data-test-id='start-date'
              data-test-value={earliestDate.toISOString()}
            >
              {moment(earliestDate).format('LL')}
            </div>
            <div>Start Date</div>
          </div>
          <div className='dates'>
            <div
              data-test-id='end-date'
              data-test-value={latestDate.toISOString()}
            >
              {moment(latestDate).format('LL')}
            </div>
            <div>End Date</div>
          </div>
        </div>
      </div>
    </div>
  )
}

MilestonesGraph.propTypes = propTypes
