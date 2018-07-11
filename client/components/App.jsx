import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'

const App = () => (
  <div className='app'>
    <h1>Softwareness</h1>
    <ErrorMessage />
    <WaitIndicator />
  </div>
)

export default App
