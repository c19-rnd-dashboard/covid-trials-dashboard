import moment from 'moment'
import { pipe } from 'sanctuary'
import { status, phasesInOrder, timelinesEstimates } from './constants'
import { mapTwoAtTime, addToDate } from 'utils/utils'

const { skipped } = status

export const filterAndSortMilestones = milestones =>
  [...milestones]
    .filter(({ status }) => status !== skipped)
    .sort(
      ({ name: nameA }, { name: nameB }) =>
        phasesInOrder.indexOf(nameA) - phasesInOrder.indexOf(nameB)
    )

const addDurationToMilestones = ({ now, delta }) => milestones => {
  let buffer = []
  for (let i = 1; i <= milestones.length; i++) {
    const first = milestones[i - 1]
    if (first.duration) {
      continue
    }
    const second = milestones[i] ? milestones[i] : { date: now }
    const { date: lastDate } = first
    const { date: newDate } = second
    const start = moment(lastDate)
    const end = moment(newDate)
    const duration = end.diff(start, 'days') || delta[first.name]
    buffer = buffer.concat({ ...first, duration, start, end })
  }
  return buffer
}

const addPercentageToMilestones = ms => {
  const totals = ms.map(({ values }) =>
    values.reduce((acc, { duration = 0 }) => duration + acc, 0)
  )
  const [max] = totals.slice().sort((a, b) => b - a)
  return ms.map(m => ({
    ...m,
    values: m.values.map(x => ({
      ...x,
      percentage: Math.round(((x.duration * 100) / max) * 100) / 100,
    })),
  }))
}

const mapResultToMilestoneStructure = ms =>
  ms.map(m => ({
    ...m,
    values: m.values.map(({ name, percentage, start, end }) => ({
      className: name,
      name,
      value: `${percentage}%`,
      start: moment(start).toISOString(),
      end: moment(end).toISOString(),
    })),
  }))

const getAdditionalPhases = phase => {
  if (!phase) {
    return phasesInOrder
  }
  const index = phasesInOrder.indexOf(phase)
  return phasesInOrder.filter(p => phasesInOrder.indexOf(p) > index)
}

const estimateFutureDates = (ms, delta) => {
  return mapTwoAtTime((first, second) => {
    const duration = delta[first.name]
    const newEnd = addToDate(first.start, duration, 'days')
    const newFirst = { ...first, end: newEnd, duration }
    const newSecond = { ...second, start: newEnd }
    return second ? [newFirst, newSecond] : [newFirst]
  }, ms)
}

const transformWithDurations = ({ now, delta }) =>
  pipe([filterAndSortMilestones, addDurationToMilestones({ now, delta })])

const t2 = pipe([addPercentageToMilestones, mapResultToMilestoneStructure])

const getEstimationCheckingItIsNotGtActual = (delta, actual) => {
  const duration = delta[actual.name]
  const newEnd = addToDate(actual.start, duration, 'days')
  const isLessThanActual = new Date(newEnd) < new Date(actual.end)
  return isLessThanActual ? { ...delta, [actual.name]: actual.duration } : delta
}

export const mapAssetToMilestones = now => ({ milestones }) => {
  if (!milestones) {
    return []
  }
  const actualMilestonesWithDuration = transformWithDurations({
    now,
    delta: timelinesEstimates.actual,
  })(milestones)
  const [latestKnownMilestone] = actualMilestonesWithDuration.slice(-1)
  const estimationPhases = getAdditionalPhases(
    latestKnownMilestone.name
  ).map(phase => ({ name: phase }))
  const optimisticEstimations = estimateFutureDates(
    [latestKnownMilestone].concat(estimationPhases),
    getEstimationCheckingItIsNotGtActual(
      timelinesEstimates.optimistic,
      latestKnownMilestone
    )
  )
  const pessimisticEstimations = estimateFutureDates(
    [latestKnownMilestone].concat(estimationPhases),
    getEstimationCheckingItIsNotGtActual(
      timelinesEstimates.pessimistic,
      latestKnownMilestone
    )
  )
  const result = [
    {
      name: 'Actual',
      values: actualMilestonesWithDuration,
    },
  ]
  return t2([
    {
      name: 'Optimistic',
      values: actualMilestonesWithDuration
        .slice(0, -1)
        .concat(optimisticEstimations),
    },
    {
      name: 'Pessimistic',
      values: actualMilestonesWithDuration
        .slice(0, -1)
        .concat(pessimisticEstimations),
    },
    ...result,
  ])
}
