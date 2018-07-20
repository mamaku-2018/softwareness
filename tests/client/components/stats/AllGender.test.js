import React from 'react'
import {mount, shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {AllGender} from '../../../../client/components/stats/AllGender'
import {AllForeignLocal} from '../../../../client/components/stats/AllForeignLocal'

configure({adapter: new Adapter()})

test('<AllGender> includes correct text', () => {
  const expected = 'Gender Split'
  const stats = [{Male: 3, Female: 10, Category: 'creative'}]
  const wrapper = shallow(<AllGender allGenderStats={stats} dispatch={() => {}} />)
  const actual = wrapper.find('h4').text()
  expect(actual).toContain(expected)
})

test('<AllGender> is including props passed in', () => {
  const stats = [{Male: 3, Female: 10, Category: 'creative'}]
  const wrapper = mount(<AllGender allGenderStats={stats} dispatch={() => {}} />)
  const actual = wrapper.find('BarChart').props().data
  expect(actual).toBe(stats)
})

test('<AllForeignLocal> includes correct text', () => {
  const expected = '<PieChart />'
  const wrapper = shallow(<AllForeignLocal dispatch={() => {}} allForeignLocalStats={[]} />)
  const actual = wrapper.find('PieChart').text()
  expect(actual).toContain(expected)
})

test('<AllForeignLocal> is including props passed in', () => {
  const local = [{name: 'Local', value: 10}, {name: 'Foreign', value: 20}]
  const wrapper = mount(<AllForeignLocal allForeignLocalStats={local} dispatch={() => {}} />)
  const actual = wrapper.find('Pie').props().data
  expect(actual.map(data => data.payload)).toEqual(local)
})
