import React from 'react'

import ErrorMessage from './ErrorMessage'
import WaitIndicator from './WaitIndicator'
import ProfileHeaderLoad from './ProfileHeaderLoad'
import ProfileHeader from './ProfileHeader'

const App = () => (
  <div className='app'>
    <h1>Softwareness</h1>
    <ErrorMessage />
    <ProfileHeaderLoad/>
    <WaitIndicator />
    <ProfileHeader/>
  </div>
)

export default App
