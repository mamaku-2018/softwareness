import React from 'react'

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
        <button>login</button>
      </div>
    </nav>
  )
}

export default Nav
