import React from 'react'
import {Link} from 'react-router-dom'

const Homebuttons = () => {
  return (
    <div className='homebuttons'>
      <Link to='/companies/add'><button>ADD COMPANY</button></Link>
      <br />
      <Link to='/companies'><button>VIEW COMPANIES</button></Link>
    </div>
  )
}

export default Homebuttons
