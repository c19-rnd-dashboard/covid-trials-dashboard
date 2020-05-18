import moment from 'moment'
import { pipe } from 'sanctuary'
import { status, phasesInOrder, timelinesEstimates } from './constants'
import { mapTwoAtTime } from 'utils/utils'

const { skipped } = status

const filterAndSortMilestones = milestones =>
  milestones
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
    const newEnd = moment(first.start).add(duration, 'days').toISOString()
    const newFirst = { ...first, end: newEnd, duration }
    const newSecond = { ...second, start: newEnd }
    return second ? [newFirst, newSecond] : [newFirst]
  }, ms)
}

// const getLatestsKnownDate = (ms) => {
//   const [lastButOne, last] = ms.slice(-2)
//   const {date, start, end} = last

// }

const transformWithDurations = ({ now, delta }) =>
  pipe([filterAndSortMilestones, addDurationToMilestones({ now, delta })])

const t2 = pipe([addPercentageToMilestones, mapResultToMilestoneStructure])

export const mapAssetToMilestones = now => ({ milestones }) => {
  if (!milestones) {
    return []
  }

  const actualMilestonesWithDuration = transformWithDurations({
    now,
    delta: timelinesEstimates.actual,
  })(milestones)
  const [latestKnownDate] = actualMilestonesWithDuration.slice(-1)
  const estimationPhases = getAdditionalPhases(
    latestKnownDate.name
  ).map(phase => ({ name: phase }))
  const optimisticEstimations = estimateFutureDates(
    [latestKnownDate].concat(estimationPhases),
    timelinesEstimates.optimistic
  )
  const pesimisticEstimations = estimateFutureDates(
    [latestKnownDate].concat(estimationPhases),
    timelinesEstimates.pesimistic
  )
  const result = [
    {
      name: 'Optimistic',
      values: actualMilestonesWithDuration.concat(optimisticEstimations),
    },
    {
      name: 'Pesimistic',
      values: actualMilestonesWithDuration.concat(pesimisticEstimations),
    },
    {
      name: 'Actual',
      values: actualMilestonesWithDuration,
    },
  ]
  return t2(result)
}
