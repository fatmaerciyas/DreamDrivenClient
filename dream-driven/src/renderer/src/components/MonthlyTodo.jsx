import { useState, useEffect } from 'react'

export default function MonthlyTodo() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState([])
  const [todos, setTodos] = useState({})
  const [currentDay, setCurrentDay] = useState(null)
  const [newTodo, setNewTodo] = useState('')
  const [showInput, setShowInput] = useState(false)

  useEffect(() => {
    renderCalendar()
  }, [currentDate])

  const renderCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const totalDays = new Date(year, month + 1, 0).getDate()
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1

    const daysArray = Array(adjustedFirstDay)
      .fill(null)
      .concat(Array.from({ length: totalDays }, (_, i) => i + 1))

    setDays(daysArray)
  }

  const handlePrev = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
  }

  const handleNext = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
  }

  const handleDayClick = (day) => {
    setCurrentDay(day)
    setShowInput(true) // Show input when a day is clicked
  }

  const handleAddTodo = () => {
    if (newTodo.trim() === '' || currentDay === null) return
    const dayString = `${currentDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`
    setTodos((prevTodos) => ({
      ...prevTodos,
      [dayString]: [...(prevTodos[dayString] || []), { text: newTodo, completed: false }]
    }))
    setNewTodo('') // Clear input
    setCurrentDay(null) // Reset current day
    setShowInput(false) // Hide input after adding todo
  }

  const handleDeleteTodo = (dayString, idx) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...(prevTodos[dayString] || [])]
      updatedTodos.splice(idx, 1) // Remove the todo at index idx
      return { ...prevTodos, [dayString]: updatedTodos.length ? updatedTodos : undefined }
    })
  }

  const handleToggleTodo = (dayString, idx) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...(prevTodos[dayString] || [])]
      updatedTodos[idx] = {
        ...updatedTodos[idx],
        completed: !updatedTodos[idx].completed // Toggle completed status
      }
      return { ...prevTodos, [dayString]: updatedTodos }
    })
  }

  return (
    <div className="flex h-screen w-[1200px] m-32 rounded-3xl justify-center bg-slate-600 opacity-90">
      <div className="w-full mx-8 p-5">
        <div className="flex justify-between items-center mb-5">
          <button onClick={handlePrev} className="bg-teal-600 text-white px-4 py-2 rounded-lg">
            ◀️ Prev
          </button>
          <h2 className="text-2xl font-bold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={handleNext} className="bg-teal-600 rounded-lg text-white px-4 py-2">
            Next ▶️
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="font-bold text-center text-lg">
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={index}
              className={`border rounded-lg text-center cursor-pointer hover:bg-slate-50 hover:scale-110 transition-all ${
                index % 7 === 5 || index % 7 === 6 ? 'bg-slate-400' : 'bg-slate-200'
              }`}
              style={{ width: '150px', height: '105px' }}
              onClick={() => handleDayClick(day)}
            >
              <span className="text-xl">{day !== null ? day : ''}</span>
              <div
                className="text-left planner px-1 overflow-auto"
                style={{ maxHeight: '80px', scrollBehavior: 'smooth' }}
              >
                {todos[`${day}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`]?.map(
                  (todo, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center text-sm relative group"
                    >
                      <label className="flex items-center">
                        {todo.completed ? '✅' : '🔶'}
                        <span className={todo.completed ? 'line-through' : ''}> {todo.text}</span>
                      </label>
                      <div className="absolute right-0 opacity-0 group-hover:opacity-100 gap-1 transition-opacity">
                        <input
                          type="checkbox"
                          checked={todo.completed}
                          onChange={(e) => {
                            e.stopPropagation() // Prevent triggering the day click
                            handleToggleTodo(
                              `${day}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`,
                              idx
                            )
                          }}
                          className="mr-2"
                        />
                        <button
                          className="text-sm"
                          onClick={(e) => {
                            e.stopPropagation() // Prevent triggering the day click
                            handleDeleteTodo(
                              `${day}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`,
                              idx
                            )
                          }}
                        >
                          ❌
                        </button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
        {currentDay && (
          <div className={`fade-input ${showInput ? 'show' : ''} mt-5`}>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              className="border p-2 rounded"
            />
            <button
              onClick={handleAddTodo}
              className="bg-green-500 text-white px-4 py-2 rounded ml-2"
            >
              Add Todo
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
