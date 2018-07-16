import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a className='logo' href='/'>
          <h2>SW</h2>
        </a>
      </div>
      <div className='navbarmenu'>
        {/* To be replaced by an Auth */}
        {!props.loggedIn && <Link to='/login' className='button'>login</Link>}
        {/* LogOut needs an onclick function added */}
        {props.loggedIn && <Link to='/' className='button'>logOut</Link>}
        {!props.loggedIn && <Link to='/register' className='button'>register</Link>}
      </div>
    </nav>
  )
}



// clicking logout will dispatch and call untoggleNav  
function mapStateToProps(state){
  console.log(state.toggleNav)
  return {
    loggedIn: state.toggleNav
  }
}


export default connect(mapStateToProps, null)(Nav)
