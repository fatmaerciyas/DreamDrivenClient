import { useState, useEffect } from 'react'
import '../../../assets/pomodoro.css' // Import the CSS for styling

const PomodoroTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let timer

    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsActive(false)
      // Reset or notify end of timer here if needed
    }

    return () => clearInterval(timer)
  }, [isActive, timeLeft])

  const formatTime = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
    const secs = String(seconds % 60).padStart(2, '0')
    return { minutes, secs }
  }

  const toggleTimer = () => {
    setIsActive((prev) => !prev)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(25 * 60)
  }

  const { minutes, secs } = formatTime(timeLeft)

  return (
    <div className="pomodoro-timer">
      <div className="flip-clock">
        <div className="flip-clock-item">
          <span className="flip-clock-number">{minutes}</span>
        </div>
        <div className="flip-clock-item">
          <span className="flip-clock-number">{secs}</span>
        </div>
      </div>
      <button onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default PomodoroTimer
