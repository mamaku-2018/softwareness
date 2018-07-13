import React from 'react'

const Nav = () => {
  return (

    <div className='columns' id='nav'>
      <div className='column' id='nav-logo'>
        <a className='logo' href='/'>
          <h2>Softwareness</h2>
        </a>
      </div>
      <div className='column' id='nav-login'>
        {/* To be replaced by an Auth */}
        <h2>LOGIN</h2>
      </div>
    </div>
  )
}

export default Nav
