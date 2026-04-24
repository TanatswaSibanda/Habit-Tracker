import React, { useState } from "react"
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts"
import "./App.css"

function App() {
  const [habit, setHabit] = useState("") // this stores what user types

  const [habits, setHabits] = useState([]) //stores list of habits

  const addHabit = () => {
    if (habit === "") return

    setHabits([...habits, { text: habit, completed: false }])
    setHabit("")
  }

  const deleteHabit = (index) => {
    const updated = habits.filter((_, i) => i !== index)
    setHabits(updated)
  }

  const completeHabit = (index) => {
    const updated = habits.map((h, i) => {
      if (i === index) {
        return { ...h, completed: true }
      }
      return h
    })

    setHabits(updated)
  }
  const completedCount = habits.filter(h => h.completed).length
  const notCompletedCount = habits.filter(h => !h.completed).length

  const chartData = [
    { name: "Completed", value: completedCount },
    { name: "Not Completed", value: notCompletedCount }
  ]
  return (
    <div className="container" >
      <h1 className='header'>DAILY HABIT TRACKER</h1>
      <div className='input'>
        <input type="text" placeholder='Something you want to improve' value={habit} onChange={(e) => setHabit(e.target.value)} />
        <button onClick={addHabit}>Add Habit💗</button>
      </div>


      <div className="list">
        <h3>Habits List</h3>

        {habits.map((h, index) => (
          <div key={index} className="habit-item">

            <span className="check">{h.completed ? "✔️" : ""}</span>

            <p className={h.completed ? "text done" : "text"}>
              {h.text}
            </p>

            {!h.completed && (
              <button className="btn complete" onClick={() => completeHabit(index)}>
                Complete
              </button>
            )}

            <button className="btn delete" onClick={() => deleteHabit(index)}>
              Delete
            </button>

          </div>
        ))}
      </div>

      <div className='summary'>
        <h3>Progress Summary</h3>
        <p>Completed : {completedCount}{" "} <br />
          Not Completed: {notCompletedCount}
        </p>
      </div>


      <div className='barChart' >

        <h3>Habit Completion Chart</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <Bar dataKey="value" fill="#e38ba7" >
            </Bar>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  )
}


export default App
