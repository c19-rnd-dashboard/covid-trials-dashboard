import React from 'react'
import { shallow } from 'enzyme'
import Tabs from './Tabs'

const tabs = [
  {
    title: 'First Tab',
    content: <>First Tab content.</>,
  },
  {
    title: 'Second',
    content: <>2</>,
  },
  {
    title: 'Third',
    content: <>Three</>,
  },
]

it('should render 1st tab selected, with first one selected', () => {
  const wrapper = shallow(<Tabs tabs={tabs} />)
  console.log(wrapper.debug())
  expect(
    wrapper
      .find('[data-test-id="selected"]')
      .containsMatchingElement(<div>First Tab</div>)
  ).toBeDefined()
  expect(
    wrapper
      .find('[data-test-id="selected"]')
      .containsMatchingElement(<div>First Tab</div>)
  ).toBeDefined()
  expect(
    wrapper
      .find('[data-test-id="componentShowing"]')
      .containsMatchingElement(<>First Tab content.</>)
  ).toBeDefined()
})
