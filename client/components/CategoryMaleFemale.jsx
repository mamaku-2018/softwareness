import React from 'react'
import {BarChart, Bar, CartesianGrid, YAxis, XAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const CategoryMaleFemale = (props) => {
  const data = [
    {category: 'technical', male: 50, female: 48},
    {category: 'creative', male: 20, female: 30},
    {category: 'support', male: 5, female: 4}
  ]
  
  return (

    <BarChart width={730} height={500} data={data} barGap={5} >
      <CartesianGrid strokeDasharray = "4 4" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip offset={20} />
      <Legend />
      <Bar dataKey="male" fill="#3FB1C8" legendType="diamond" barSize={50} />
      <Bar dataKey="female" fill="#C84E4E" legendType="diamond" barSize={50}/>
    </BarChart>

  )
}

export default CategoryMaleFemale
