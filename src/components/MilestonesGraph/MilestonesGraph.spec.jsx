import React from 'react'
import { shallow } from 'enzyme'
import {
  MilestonesGraph,
  getAllDatesFromMilestones,
  getEarliestDate,
  getLatestDate,
  getTotalMilestoneDurationInDays,
} from './MilestonesGraph'
import milestones from './mocks/milestones.json'

it('should render all milestones ', () => {
  const numberOfMilestones = milestones.length
  const wrapper = shallow(<MilestonesGraph milestones={milestones} />)
  expect(wrapper.find('[data-test-id="bar"]')).toHaveLength(numberOfMilestones)
  expect(wrapper.find('[data-test-id="label"]')).toHaveLength(
    numberOfMilestones
  )
})

it('should render start and end dates', () => {
  const wrapper = shallow(<MilestonesGraph milestones={milestones} />)
  const xAxis = wrapper.find('[data-test-id="x-axis"]')
  expect(
    xAxis.find('[data-test-id="start-date"]').prop('data-test-value')
  ).toEqual('2020-01-11T00:00:00.000Z')
  expect(
    xAxis.find('[data-test-id="end-date"]').prop('data-test-value')
  ).toEqual('2020-05-09T20:47:50.756Z')
})

const expectedDates = [
  {
    start: new Date('2020/02/10'),
    end: new Date('2020/02/20'),
  },
  {
    start: new Date('2020/03/01'),
    end: new Date('2020/03/15'),
  },
  {
    start: new Date('2020/03/17'),
    end: new Date('2020/03/28'),
  },
  {
    start: new Date('2020/04/04'),
    end: new Date('2020/04/23'),
  },
  {
    start: new Date('2020/04/25'),
    end: new Date('2020/05/05'),
  },
  {
    start: new Date('2020/02/21'),
    end: new Date('2020/03/10'),
  },
  {
    start: new Date('2020/03/23'),
    end: new Date('2020/04/25'),
  },
  {
    start: new Date('2020/04/26'),
    end: new Date('2020/05/04'),
  },
  {
    start: new Date('2020/05/20'),
    end: new Date('2020/06/15'),
  },
  {
    start: new Date('2020/06/18'),
    end: new Date('2020/06/30'),
  },
  {
    start: new Date('2020/03/01'),
    end: new Date('2020/03/15'),
  },
  {
    start: new Date('2020/03/01'),
    end: new Date('2020/03/15'),
  },
  {
    start: new Date('2020/03/01'),
    end: new Date('2020/03/15'),
  },
]

it('should get all the dates from the milestones', () => {
  expect(getAllDatesFromMilestones(milestones)).toMatchSnapshot()
})

it('should return the earliest date', () => {
  const dates = expectedDates.map(({ start }) => start)
  expect(getEarliestDate(dates)).toEqual(new Date('2020/02/10'))
})

it('should return the latest date', () => {
  const dates = expectedDates.map(({ end }) => end)
  expect(getLatestDate(dates)).toEqual(new Date('2020/06/30'))
})

// eslint-disable-next-line jest/no-disabled-tests
it.skip('should return the duration of the milestone in days', () => {
  const milestone = milestones[0]
  expect(getTotalMilestoneDurationInDays(milestone)).toEqual(85)
})
