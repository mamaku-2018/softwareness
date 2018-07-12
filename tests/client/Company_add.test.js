import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CompanyName from '../../client/components/Company_Add'
configure({adapter: new Adapter()})

test('<CompanyName />', () => {
  const expected = 'Site URL'

  const wrapper = shallow(<CompanyName />)
  const actual = wrapper.text()

  expect(actual).toBe(expected)
})
