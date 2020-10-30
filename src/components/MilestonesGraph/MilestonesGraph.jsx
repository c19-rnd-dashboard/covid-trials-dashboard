import React from 'react'
import PropTypes from 'prop-types'
import { StackedBar } from '../StackedBar/StackedBar'
import { MilestonesTooltip } from '../MilestonesTooltip'
import { BarIndicator } from '../BarIndicator'
import moment from 'moment'
import './MilestonesGraph.css'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  axis: {
    display: 'flex',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
  },
  axisDates: {
    textAlign: 'center',
    padding: '0.5rem',
  },
  axisStartDate: {
    marginLeft: '-7em',
  },
}))

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
          ]),
          end: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.instanceOf(moment),
            PropTypes.string,
          ]),
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
  const start = getEarliestDate(values.map(({ start }) => start).filter(a => a))
  const end =
    getLatestDate(values.map(({ end }) => end).filter(a => a)) || moment()
  const duration = moment.duration(moment(end).diff(moment(start))).as('days')
  return Math.floor(Math.abs(duration))
}

export const MilestonesGraph = ({ milestones }) => {
  const classes = useStyles()
  const dates = getAllDatesFromMilestones(milestones)

  const earliestDate = getEarliestDate(
    dates.map(({ start, end }) => start || end).filter(a => a)
  )
  const latestDate = getLatestDate(
    dates.map(({ start, end }) => end || start).filter(a => a)
  )
  const [actualMilestone = []] = milestones.filter(
    ({ name }) => name.toLowerCase() === 'actual'
  )
  const elapsedDays = getTotalMilestoneDurationInDays(actualMilestone)
  return (
    <div className='milestones-graph'>
      <div className='labels'>
        {milestones.map(({ name }) => (
          <Typography key={name} data-test-id='label' className='label'>
            {name}
          </Typography>
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
              indicator={
                i === self.length - 1 && elapsedDays > 0
                  ? () => (
                    <BarIndicator length={milestones.length}>
                      <div>Elapsed Time</div>
                      <div>{elapsedDays} days</div>
                    </BarIndicator>
                  )
                  : () => {}
              }
            />
          </div>
        ))}
        <div data-test-id='x-axis' className={classes.axis}>
          {earliestDate && (
            <div className={[classes.axisDates, classes.axisStartDate]}>
              <div
                data-test-id='start-date'
                data-test-value={moment(earliestDate).toISOString()}
              >
                {moment(earliestDate).format('LL')}
              </div>
              <Typography>Start Date</Typography>
            </div>
          )}
          {milestones.length > 1 && latestDate && (
            <div className={classes.axisDates}>
              <Typography
                data-test-id='end-date'
                data-test-value={moment(latestDate).toISOString()}
              >
                {moment(latestDate).format('LL')}
              </Typography>
              <Typography>End Date</Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

MilestonesGraph.propTypes = propTypes
