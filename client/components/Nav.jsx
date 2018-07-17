import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a className='logo' href='/'>
          <Link to='/'><img src='images/logo.png' alt='softwareness logo' /></Link>
        </a>
      </div>
      <div className='navbarmenu'>
        {!props.loggedIn && <Link to='/login' className='button'>login</Link>}
        {props.loggedIn && <Link to='/' className='button'>logOut</Link>}
        {!props.loggedIn && <Link to='/register' className='button'>register</Link>}
      </div>
    </nav>
  )
}

function mapStateToProps (state) {
  return {
    loggedIn: state.login
  }
}

export default connect(mapStateToProps, null)(Nav)
