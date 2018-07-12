import React from 'react'
import {LineChart, Line} from 'recharts'

const pie = () => {
  return (
    <div className='pie'>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  )
}

export default pie
