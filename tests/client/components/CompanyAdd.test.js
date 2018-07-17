import React from 'react'
import {shallow} from 'enzyme'

import {CompanyName} from '../../../client/components/CompanyAdd'

test('<CompanyName />', () => {
  const expected = 'Add Company'

  const wrapper = shallow(<CompanyName />)
  const actual = wrapper.find('h2').text()

  expect(actual).toEqual(expected)
})
