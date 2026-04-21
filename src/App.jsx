import React from "react"

function App() {
  return (
    <div>
      <h1 className='header'>DAILY HABIT TRACKER</h1>
      <div className='input'>
        <input type="text" placeholder='Add Habit' />
        <button type='submit'>ADD</button>
      </div>

      <div className='list' >
        <h3>Habits List</h3>

      </div>

      <div className='summary'>
        <h3>Progress Summary</h3>
        <p>Completed: {0}    Not Completed: {0} </p>
      </div>

      <div className='barChart'>
        <h3>Habit Completion Chart</h3>

      </div>

    </div>
  )
}


export default App
