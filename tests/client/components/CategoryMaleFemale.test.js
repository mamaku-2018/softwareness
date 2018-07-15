import React from 'react'
import {render, shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CategoryMaleFemale} from '../../../client/components/CategoryMaleFemale'

configure({adapter: new Adapter()})

test('<CategoryMaleFemale>', () => {
  const expected = 'Gender Split of Each Cateogry'
  const wrapper = shallow(<CategoryMaleFemale />)
  const actual = wrapper.find('h2').text()
  expect(actual).toEqual(expected)
})

test('<Stats> returns <CategoryMaleFemale />', () => {
  const expected = 0
  const wrapper = render(<CategoryMaleFemale />)
  const actual = wrapper.find('BarChart').length > 0
  expect(actual).toBe(expected)
})
