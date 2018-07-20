import React from 'react'
import AllForeignLocalStats from './stats/AllForeignLocal'
import AllGenderStats from './stats/AllGender'

export const Stats = () => (
  <div className='stats'>
    <h3>Statistics</h3>
    <br />
    <AllForeignLocalStats />
    <br />
    <AllGenderStats />
  </div>
)

export default Stats
