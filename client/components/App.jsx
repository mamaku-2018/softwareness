import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import Nav from './Nav'
import Homegraph from './Homegraph'
import About from './About'
import Footer from './Footer'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <ErrorMessage />

        <div className='main-container'>
          <div className='columns'>

            <div className='column' id='about'>
              <Route path='/' component={About} />
              <a className='button' href='/companies/add'>add company</a>
              <a className='button' href='/companies'>view companies</a>
            </div>

            <div className='column' id='homegraph'>
              <Route path='/' component={Homegraph} />
            </div>

            <WaitIndicator />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
