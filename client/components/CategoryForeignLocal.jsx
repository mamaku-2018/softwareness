import React from 'react'
import {PieChart, Pie, Tooltip, Cell, Legend} from 'recharts'

const data = [{name: 'foreign', value: 40}, {name: 'local', value: 60}]

const colors = ['#3fb1c8', '#c84e4e']

const localforeign = () => {
  return (
    <div className='pie'>
      <h1>Foreign / Local</h1>

      <PieChart width={860} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          fill="#70ffc3"
          label
        >
          {
            data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]}/>
            ))
          }
        </Pie>
        <Legend iconType="square"/>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default localforeign
