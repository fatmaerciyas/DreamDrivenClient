import { useState, useEffect } from 'react'
import '../../../assets/clockEffect.css'

const Clock = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  }, [])

  return (
    <div className="clock flex flex-col align-middle bg-slate-700 justify-center items-center">
      <h1>
        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </h1>
    </div>
  )
}

export default Clock
