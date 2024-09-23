import { useState, useEffect } from 'react'

export default function MonthlyTodo() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [days, setDays] = useState([])

  useEffect(() => {
    renderCalendar()
  }, [currentDate])

  const renderCalendar = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1).getDay() // Get the first day of the month (0 = Sunday)
    const totalDays = new Date(year, month + 1, 0).getDate()

    // Adjust firstDay to start from Monday
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
    if (day) {
      alert(`You clicked on ${day} ${currentDate.toLocaleString('default', { month: 'long' })}`)
    }
  }

  return (
    <div className="flex h-screen w-4/5 m-32 mt-40  rounded-3xl justify-center bg-slate-600 opacity-90">
      {/* Main Content */}
      <div className="w-full mx-8 p-5">
        <div className="flex justify-between items-center mb-5">
          <button onClick={handlePrev} className="bg-blue-500 text-white px-4 py-2 rounded">
            Prev
          </button>
          <h2 className="text-xl font-bold">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded">
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {/* Days of the week, starting with Monday */}
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
            <div key={day} className="font-bold text-center">
              {day}
            </div>
          ))}

          {/* Days */}
          {days.map((day, index) => (
            <div
              key={index}
              className={`border rounded-lg p-2 text-center cursor-pointer hover:bg-slate-100 transition-all ${index % 7 === 5 || index % 7 === 6 ? 'bg-slate-400' : ''}`}
              style={{ minHeight: '160px' }}
              onClick={() => handleDayClick(day)}
            >
              {day !== null ? day : ''}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
