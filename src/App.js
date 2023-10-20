import React from 'react'
import JobBoard from './component/JobBoard'

const App = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4" style={{ color: '#ff6600' }}>Hacker News Job Board</h1>
      <JobBoard />
    </div>
  )
}

export default App
