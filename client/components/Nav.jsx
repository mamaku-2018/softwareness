import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a className='logo' href='/'>
          <h2>Softwareness</h2>
        </a>
      </div>
      <div className='navbar-menu'>
        {/* To be replaced by an Auth */}
        <h2>login</h2>
      </div>
    </nav>
  )
}

export default Nav
