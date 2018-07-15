import React from 'react'
import CategoryForeignLocal from './CategoryForeignLocal'
import CategoryMaleFemale from './CategoryMaleFemale'

export const Stats = () => (
  <div className='stats'>
    <h2>Statistics</h2>
    <CategoryForeignLocal />
    <CategoryMaleFemale />
  </div>
)

export default Stats
