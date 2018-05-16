import React from 'react'

import { Header } from './header'
import { Dashboard } from './dashboard'

class App extends React.Component {
  render(){
    return (
      <main>
        <Header />
        <Dashboard />
      </main>
    )
  }
}

export { App }