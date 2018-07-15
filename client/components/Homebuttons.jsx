import React from 'react'
import {Link} from 'react-router-dom'

const Homebuttons = () => {
  return (
    <div className='homebuttons'>
<<<<<<< HEAD
      <p><Link to='/companies/add' className="button">Add company</Link></p>
      <p><Link to='/companies' className="button">View companies</Link></p>
=======
      <Link to='/companies/add' className='button'>Add company</Link>
      <Link to='/companies' className='button'>View companies</Link>
      <Link to='/stats' className='button'>Stats</Link>
>>>>>>> 51f2b2650a489ca35b3c84a80d215c97758c6fed
    </div>
  )
}

export default Homebuttons
