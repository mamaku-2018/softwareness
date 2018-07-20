import React from 'react'
import AllForeignLocalStats from './stats/AllForeignLocal'

const Homegraph = () => {
  return (
    <div className='homegraph'>
      <AllForeignLocalStats />
      <p> Employee country of origin in NZ tech industry as of July 2018. </p>
    </div>
  )
}

export default Homegraph
