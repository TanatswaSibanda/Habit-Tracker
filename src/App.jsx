import React, { useState } from "react"
import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts"

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
    <div>
      <h1 className='header'>DAILY HABIT TRACKER</h1>
      <div className='input'>
        <input type="text" placeholder='Add Habit' value={habit} onChange={(e) => setHabit(e.target.value)} />
        <button onClick={addHabit}>ADD</button>
      </div>


      <div className='list' >
        <h3>Habits List</h3>
        {habits.map((h, index) => (
          <div key={index} style={{ display: "flex", gap: "10px", alignItems: "center" }}>


            <span>{h.completed ? "✔️" : ""}</span>


            <p style={{ textDecoration: h.completed ? "line-through" : "none" }}>
              {h.text}
            </p>


            {!h.completed && (
              <button onClick={() => completeHabit(index)}>
                Complete
              </button>
            )}


            <button onClick={() => deleteHabit(index)}>
              Delete
            </button>

          </div>
        ))}
      </div>

      <div className='summary'>
        <h3>Progress Summary</h3>
        <p>Completed: {completedCount}{" "}
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
