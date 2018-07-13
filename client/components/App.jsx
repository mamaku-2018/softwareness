import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav'
import About from './About'
import Footer from './Footer'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'
import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

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
              <Route path='/' component={Homebuttons} />
            </div>

            <div className='column' id='homegraph'>
              <Route path='/' component={Homegraph} />
            </div>
          </div>
          <WaitIndicator />
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
