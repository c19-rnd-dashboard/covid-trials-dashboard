import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from '.'

it('should render input', () => {
  const wrapper = shallow(<TextInput />)
  expect(wrapper).toMatchSnapshot()
})

it('should render the input with especified props', () => {
  const props = {
    placeholder: 'Search something ...',
  }
  const wrapper = shallow(<TextInput {...props} />)
  expect(wrapper.find('input').props().placeholder).toEqual(props.placeholder)
})
