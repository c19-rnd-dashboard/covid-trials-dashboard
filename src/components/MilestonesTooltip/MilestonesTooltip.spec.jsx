import React from 'react'
import { shallow } from 'enzyme'
import { MilestonesTooltip } from './MilestonesTooltip'

it('should render a tooltip component', () => {
  const wrapper = shallow(
    <MilestonesTooltip
      startDate={new Date('2020/02/20').toISOString()}
      endDate={new Date('2020/03/05').toISOString()}
    />
  )
  expect(wrapper.find('.tooltip').exists()).toBe(true)
  expect(wrapper).toMatchSnapshot()
})
