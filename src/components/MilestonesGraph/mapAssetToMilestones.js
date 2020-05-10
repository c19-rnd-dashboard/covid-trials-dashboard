import moment from 'moment'
import { pipe } from 'sanctuary'
import { status, phasesInOrder, timelinesEstimates } from './constants'

const { skipped } = status

const filterAndSortMilestones = milestones =>
  milestones
    .filter(({ status }) => status !== skipped)
    .sort(
      ({ name: nameA }, { name: nameB }) =>
        phasesInOrder.indexOf(nameA) - phasesInOrder.indexOf(nameB)
    )

const addDurationToMilestones = ({ now, delta, type }) => milestones => {
  let buffer = []
  for (let i = 1; i <= milestones.length; i++) {
    const first = milestones[i - 1]
    const second = milestones[i] ? milestones[i] : { date: now }
    const { date: lastDate } = first
    const { date: newDate } = second
    const start = moment(lastDate)
    const end = moment(newDate)
    const duration =
      type !== 'actual'
        ? delta[first.name]
        : end.diff(start, 'days') || delta[first.name]
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

const addAllPhases = ms =>
  phasesInOrder.map(name => {
    const m = ms.find(m => m.name === name)
    return m ? m : { name }
  })

const transformWithDurations = ({ now, delta, type }) =>
  pipe([filterAndSortMilestones, addDurationToMilestones({ now, delta, type })])

const t2 = pipe([addPercentageToMilestones, mapResultToMilestoneStructure])

export const mapAssetToMilestones = now => ({ milestones }) => {
  if (!milestones) {
    return []
  }
  const result = [
    {
      name: 'Optimistic',
      values: transformWithDurations({
        now,
        type: 'optimistic',
        delta: timelinesEstimates.optimistic,
      })(addAllPhases(milestones)),
    },
    {
      name: 'Pesimistic',
      values: transformWithDurations({
        now,
        type: 'pesimistic',
        delta: timelinesEstimates.pesimistic,
      })(addAllPhases(milestones)),
    },
    {
      name: 'Actual',
      values: transformWithDurations({
        now,
        type: 'actual',
        delta: timelinesEstimates.actual,
      })(milestones),
    },
  ]
  return t2(result)
}
