import React from 'react'
import {mount, shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {CategoryMaleFemale} from '../../../client/components/CategoryMaleFemale'
import {CategoryForeignLocal} from '../../../client/components/CategoryForeignLocal'

configure({adapter: new Adapter()})

test('<CategoryMaleFemale> includes correct text', () => {
  const expected = 'Gender Split'
  const testFn = jest.fn()
  const wrapper = shallow(<CategoryMaleFemale dispatch={testFn} />)
  const actual = wrapper.find('h2').text()
  expect(actual).toContain(expected)
})

test('<CategoryMaleFemale> is including props passed in', () => {
  const gender = [{Male: 3, Female: 10, Category: 'creative'}]
  const testFn = jest.fn()
  const wrapper = mount(<CategoryMaleFemale gender={gender} dispatch={testFn} />)
  const actual = wrapper.find('BarChart').props().data
  expect(actual).toBe(gender)
})

test('<CategoryLocalForeign> includes correct text', () => {
  const expected = '<PieChart />'
  const testFn = jest.fn()
  const wrapper = shallow(<CategoryForeignLocal dispatch={testFn} local={[]} />)
  const actual = wrapper.find('PieChart').text()
  expect(actual).toContain(expected)
})

test('<CategoryLocalForeign> is including props passed in', () => {
  const local = [{name: 'Local', value: 10}, {name: 'Foreign', value: 20}]
  const testFn = jest.fn()
  const wrapper = mount(<CategoryForeignLocal local={local} dispatch={testFn} />)
  const actual = wrapper.find('Pie').props().data
  expect(actual.map(data => data.payload)).toEqual(local)
})
