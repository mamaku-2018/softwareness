import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import CompanyInfo from './CompanyInfo'

const App = () => (
  <div className='app'>
    <h1>Softwareness</h1>
    <ErrorMessage />
    <WaitIndicator />
    <CompanyInfo/>
  </div>
)

export default App
