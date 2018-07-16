import React from 'react'
import CategoryForeignLocal from './CategoryForeignLocal'
import CategoryMaleFemale from './CategoryMaleFemale'
import CategoryCompanyGender from './CategoryCompanyGender'

export const Stats = () => (
  <div className='stats'>
    <h2>Statistics</h2>
    <CategoryForeignLocal />
    <CategoryMaleFemale />
    <CategoryCompanyGender />
  </div>
)

export default Stats
