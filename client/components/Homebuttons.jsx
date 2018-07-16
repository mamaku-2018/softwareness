import React from 'react'
import {Link} from 'react-router-dom'

const Homebuttons = () => {
  return (
    <div className='homebuttons'>
      <Link to='/companies/add' className='button'>Add company</Link>
      <Link to='/companies' className='button'>View companies</Link>
      <Link to='/stats' className='button'>Statistics</Link>
    </div>
  )
}

export default Homebuttons
