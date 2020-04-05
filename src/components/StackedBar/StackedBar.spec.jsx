import React from 'React'
import { shallow, mount } from 'enzyme'
import { StackedBar } from './StackedBar'
const items = [
  {
    value: '25%',
    data: 'something',
  },
  {
    value: '30%',
    data: 'somethingElse',
  },
]
const colorClasses = ['primary-bg', 'secondary-bg', 'pink-bg']
it('should render a bar with as segments as props', () => {
  const wrapper = shallow(
    <StackedBar items={items} colorClasses={colorClasses} />
  )
  expect(
    wrapper.find('[data-test-id="segment"]').first().hasClass(colorClasses[0])
  ).toBe(true)
  expect(
    wrapper.find('[data-test-id="segment"]').at(1).hasClass(colorClasses[1])
  ).toBe(true)
  expect(wrapper.find('[data-test-id="segment"]').at(2).exists()).toBe(false)
})

it('should call the tootlip with the right arguments', () => {
  // eslint-disable-next-line react/prop-types
  const TooltipContent = props => <div className='tooltip'>{props.data}</div>
  const wrapper = mount(
    <StackedBar
      items={items}
      colorClasses={colorClasses}
      tooltip={TooltipContent}
    />
  )
  expect(wrapper.find('.tooltip').first().text()).toEqual('something')
})
