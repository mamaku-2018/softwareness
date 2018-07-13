import React from 'react'

import About from './About'
import Homegraph from './Homegraph'
import Homebuttons from './Homebuttons'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <Homegraph />
        <About />
        <Homebuttons />
      </div>
    </div>
  )
}

export default Home
