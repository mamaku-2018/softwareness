import React from 'react'
import CategoryForeignLocal from './CategoryForeignLocal'
import CategoryMaleFemale from './CategoryMaleFemale'
import CategoryCompanyGender from './CategoryCompanyGender'

export const Stats = () => (
  <div className='stats'>
    <h3>Statistics</h3>
    <br />
    <CategoryForeignLocal />
    <br />
    <CategoryMaleFemale />
    <CategoryCompanyGender />
  </div>
)

export default Stats
