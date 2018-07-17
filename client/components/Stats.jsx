import React from 'react'
import CategoryForeignLocal from './CategoryForeignLocal'
import CategoryMaleFemale from './CategoryMaleFemale'

export const Stats = () => (
  <div className='stats'>
    <h3>Statistics</h3>
    <br />
    <CategoryForeignLocal />
    <br />
    <CategoryMaleFemale />
  </div>
)

export default Stats
