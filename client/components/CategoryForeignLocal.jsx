import React from 'react'
import {PieChart, Pie, Tooltip, Cell, } from 'recharts'

const data = [{name: 'foreign', value: 40}, {name: 'local', value: 60}]

const colors = ['#4df9d1', '#b8f24d']

const localforeign = () => {
  return (
    <div className='pie'>

      <PieChart width={730} height={250}>
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
        <legend align='left' />

        <Tooltip />
      </PieChart>
    </div>
  )
}

export default localforeign
