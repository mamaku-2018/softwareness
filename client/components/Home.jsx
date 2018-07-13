import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'

const Home = () => {
  return (

    <div className='columns'>

      <div className='column' id='about'>
        <Route path='/' component={About} />
        <Route path='/' component={Homebuttons} />
      </div>

      <div className='column' id='homegraph'>
        <Route path='/' component={Homegraph} />
      </div>
    </div>
  )
}

export default Home
