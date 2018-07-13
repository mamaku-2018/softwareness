import React from 'react'
import {Link} from 'react-router-dom'

const Homebuttons = () => {
  return (
    <div className='homebuttons'>
      <p><Link to='/companies/add' className="button">Add company</Link></p>
      <p><Link to='/companies' className="button">View companies</Link></p>
    </div>
  )
}

export default Homebuttons
