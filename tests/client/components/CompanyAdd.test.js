import React from 'react'
import {shallow} from 'enzyme'

import {CompanyAdd} from '../../../client/components/CompanyAdd'

test('<CompanyAdd />', () => {
  const expected = 'Add Company'

  const wrapper = shallow(<CompanyAdd />)
  const actual = wrapper.find('h3').text()

  expect(actual).toEqual(expected)
})
