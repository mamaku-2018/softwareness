import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import CompanyInfoLoad from './CompanyInfoLoad'
import CompanyInfo from './CompanyInfo'

const App = () => (
  <div className='app'>
    <h1>Softwareness</h1>
    <ErrorMessage />
    <CompanyInfoLoad/>
    <WaitIndicator />
    <CompanyInfo/>
  </div>
)

export default App
