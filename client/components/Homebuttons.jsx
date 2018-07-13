import React from 'react'
import {Link} from 'react-router-dom'

const Homebuttons = () => {
  return (
    <div className='homebuttons'>
      <button><Link to='/companies/add'>Add company</Link></button>
      <button><Link to='/companies'>View companies</Link></button>
    </div>
  )
}

export default Homebuttons
