import React from 'react'
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CategoryMaleFemale} from '../../../client/components/CategoryMaleFemale'


configure({adapter: new Adapter()})

test('<CategoryMaleFemale>', () => {
  const expected = 'Gender Split'
  const testFn = jest.fn()
  const wrapper = shallow(<CategoryMaleFemale dispatch={testFn} />)
  const actual = wrapper.find('h2').text()
  expect(actual).toContain(expected)
})

test('<CategoryMaleFemale>', () => {
  const expected = 10
  const testFn = jest.fn()
  const wrapper = shallow(<CategoryMaleFemale dispatch={testFn} />)
  const actual = wrapper.prop('gender').
  expect(actual).toBe(expected)
})
