import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a className='logo' href='/'>
          <h2>SW</h2>
        </a>
      </div>
      <div className='navbar-menu'>
        {/* To be replaced by an Auth */}
        <Link to='/login' className='button'>login</Link>
        <Link to='/register' className='button'>register</Link>
      </div>
    </nav>
  )
}

export default Nav
