import React from 'react'
import {PieChart, Pie, Tooltip} from 'recharts'

const data = [{name: 'foreign', value: 40}, {name: 'local', value: 60}]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

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
          innerRadius={60}
          fill="#70ffc3"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default localforeign
