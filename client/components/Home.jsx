import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'

const Home = () => {
  return (

    <div className='columns'>

      <div className='about column'>
        <Route path='/' component={About} />
        <Route path='/' component={Homebuttons} />
      </div>

      <div className='homegraph column'>
        <Route path='/' component={Homegraph} />
      </div>
    </div>
  )
}

export default Home
