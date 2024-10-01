import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function MonthlyTodo() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState([])
  const [todos, setTodos] = useState({})
  const [currentDay, setCurrentDay] = useState(null)
  const [newTodo, setNewTodo] = useState('')
  const [showRectangle, setShowRectangle] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('#475569')
  const [fade, setFade] = useState(0) // State for fade effect
  const navigate = useNavigate()

  useEffect(() => {
    renderCalendar()
    setFade(1) // Trigger fade-in effect
  }, [currentDate])

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
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
    setFade(0) // Fade out
    setTimeout(() => {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))
      setFade(1) // Fade in
    }, 200) // Match with the CSS transition duration
  }

  const handleNext = () => {
    setFade(0) // Fade out
    setTimeout(() => {
      setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))
      setFade(1) // Fade in
    }, 200) // Match with the CSS transition duration
  }
  const handleDayClick = (day) => {
    setFade(0) // Fade out
    setTimeout(() => {
      setCurrentDay(day)
      setShowRectangle(true)
      setFade(1) // Fade in
    }, 150) // Adjust timing as needed
  }

  const handleCloseRectangle = () => {
    setFade(0) // Fade out
    setTimeout(() => {
      setShowRectangle(false)
      setCurrentDay(null)
      setFade(1) // Fade in
    }, 150) // Adjust timing as needed
  }

  const handleAddTodo = () => {
    if (newTodo.trim() === '' || currentDay === null) return
    const dayString = `${currentDay}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`
    setTodos((prevTodos) => ({
      ...prevTodos,
      [dayString]: [...(prevTodos[dayString] || []), { text: newTodo, completed: false }]
    }))
    setNewTodo('')
    handleCloseRectangle()
  }

  const handleDeleteTodo = (dayString, idx) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...(prevTodos[dayString] || [])]
      updatedTodos.splice(idx, 1)
      handleCloseRectangle()
      return { ...prevTodos, [dayString]: updatedTodos.length ? updatedTodos : undefined }
    })
  }

  const handleToggleTodo = (dayString, idx) => {
    setTodos((prevTodos) => {
      const updatedTodos = [...(prevTodos[dayString] || [])]
      updatedTodos[idx] = {
        ...updatedTodos[idx],
        completed: !updatedTodos[idx].completed
      }
      handleCloseRectangle()
      return { ...prevTodos, [dayString]: updatedTodos }
    })
  }

  return (
    <div
      className="flex mt-40 h-screen w-[1300px] m-32 rounded-3xl justify-center transition-opacity duration-500"
      style={{ backgroundColor, opacity: fade }}
    >
      <div className="w-full mx-8 p-6 relative">
        <button
          className="absolute text-3xl top-0 right-0 -mr-6 -mt-2 w-8 h-8 cursor-pointer text-white bg-transparent"
          onClick={() => navigate(-1)} // Go back to previous page
        >
          &times;
        </button>
        <div className="flex justify-between items-center mb-5">
          <button onClick={handlePrev} className="bg-teal-600 text-white px-4 py-2 rounded-lg">
            ◀️ Prev
          </button>
          <h2 className="text-2xl font-bold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="justify-between">
            <button onClick={handleNext} className="bg-teal-600 rounded-lg text-white px-4 py-2">
              Next ▶️
            </button>
          </div>
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
              style={{ width: '165px', height: '120px' }}
              onClick={() => handleDayClick(day)}
            >
              <span className="text-xl">{day !== null ? day : ''}</span>
              <div
                className="text-left planner px-1 pb-2 overflow-auto"
                style={{ maxHeight: '85px', scrollBehavior: 'smooth' }}
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
                            e.stopPropagation()
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
                            e.stopPropagation()
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
        {showRectangle && currentDay !== null && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div
              className={`bg-white p-8 rounded-lg relative shadow-lg w-1/3 transition-opacity duration-200`}
              style={{ opacity: fade }}
            >
              <button
                className="absolute top-1 right-2 text-4xl text-red-500 cursor-pointer"
                onClick={handleCloseRectangle} // Close the modal when clicked
              >
                &times; {/* X icon */}
              </button>
              <h3 className="text-lg mb-4">
                Add a todo for day {currentDay} in {monthNames[currentDate.getMonth()]}
              </h3>
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
                className="border p-2 rounded w-full mb-4"
              />
              <div className="flex justify-end">
                <button
                  onClick={handleAddTodo}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Color Picker positioned at bottom right */}
      <div className="absolute bottom-4 right-4">
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="border rounded"
          style={{ width: '50px', height: '50px' }}
        />
      </div>
    </div>
  )
}
