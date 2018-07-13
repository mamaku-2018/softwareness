import React from 'react'
import {shallow, mount} from 'enzyme'
import {EmployeeStats} from '../../../client/components/EmployeeStats'

test('<EmployeeStats /> testing value in body of work', () => {
  const expected = 'Job Category'

  const wrapper = shallow(<EmployeeStats />)
  const actual = wrapper.text()

  expect(actual).toEqual(expected)
})

test('<EmployeeStats /> testing if props can be altered', () => {
  const wrapper = mount(<EmployeeStats testValue= "tester"/>)
  expect(wrapper.props().testvalue).toEqual('tester')
  wrapper.setProps({testvalue: 'newTestValue'})
  expect(wrapper.props().testvalue).toEqual('newTestValue')
})
