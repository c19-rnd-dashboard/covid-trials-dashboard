import moment from 'moment'
import { map, pipe } from 'sanctuary'

export const log = tag => value => {
  console.log({ tag, value })
  return value
}

export const mapTwoAtTime = (fn, xs) => {
  const [head, subHead, ...rest] = xs
  if (!head) {
    return []
  }
  const [first, second] = fn(head, subHead)
  return [first, ...mapTwoAtTime(fn, [second, ...rest])]
}

export const isVaccine = ({ interventionType = '' }) =>
  interventionType.toLowerCase().includes('vaccine')

export const addToDate = (date, duration, timeUnit = 'days') =>
  moment(date).add(duration, timeUnit).toISOString()

export const isValidDate = date => moment(date).isValid()

export const count = ls =>
  ls.reduce(
    (acc, x) =>
      !Object.prototype.hasOwnProperty.call(acc, x)
        ? { ...acc, [x]: 1 }
        : { ...acc, [x]: acc[x] + 1 },
    {}
  )

export const countBy = fn => pipe([map(fn), count])
