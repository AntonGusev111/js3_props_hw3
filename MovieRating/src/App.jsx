import { useState } from 'react'
import './App.css'
import Stars from './components/Stars'

function App() {

  return (
    <div className="App">
      <Stars count={2} />
    </div>
  )
}

export default App
