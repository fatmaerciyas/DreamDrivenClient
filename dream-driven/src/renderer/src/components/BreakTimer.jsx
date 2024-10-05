import { useState, useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../../../assets/pomodoro.css'
import beepSound from '../../../assets/beep.mp3'
import Congratulations from './Congratulations'
import { useNavigate } from 'react-router-dom'

const BreakTimer = () => {
  const [breakLength, setBreakLength] = useState(5)
  const [isRunning, setIsRunning] = useState(false)
  const [showCongrats, setShowCongrats] = useState(false)
  const [duration, setDuration] = useState(breakLength * 60)
  const [fade, setFade] = useState(0) // Start at 0 for fade-in effect
  const navigate = useNavigate()

  useEffect(() => {
    // Fade in effect
    const fadeIn = setInterval(() => {
      setFade((prev) => {
        if (prev < 1) return prev + 0.1 // Increase opacity
        clearInterval(fadeIn) // Clear interval when fully visible
        return 1
      })
    }, 30) // Adjust duration as needed

    return () => clearInterval(fadeIn) // Cleanup
  }, [])

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
      setDuration(breakLength * 60)
    }
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const reloadPage = () => {
    navigate(0) // This reloads the current route
  }

  const handleClear = () => {
    setIsRunning(false)
    setBreakLength(5)
    setShowCongrats(false)
    setDuration(5 * 60)
  }

  const onComplete = () => {
    const audio = new Audio(beepSound)
    audio.play()

    setShowCongrats(true)
    setIsRunning(false)

    return [true, duration]
  }

  const handleCloseCongrats = () => {
    setShowCongrats(false)
    navigate('/pomodoro')
  }

  const handleBreakChange = (change) => {
    const newBreakLength = Math.max(1, breakLength + change)
    setBreakLength(newBreakLength)
    setDuration(newBreakLength * 60)
  }

  const handleFinishSession = () => {
    const audio = new Audio(beepSound)
    audio.play()

    setShowCongrats(true)
    setIsRunning(false)
  }

  return (
    <div
      className="pomodoro backdrop-blur-sm transition-opacity duration-200"
      style={{ opacity: fade }} // Apply fade-in effect
    >
      <div className="circle-container">
        <CountdownCircleTimer
          isPlaying={isRunning}
          duration={duration}
          colors="url(#your-unique-id)"
          onComplete={onComplete}
        >
          {({ remainingTime }) => (
            <div style={{ fontSize: '2em', color: '#ffffff' }}>
              {`${Math.floor(remainingTime / 60)}:${String(remainingTime % 60).padStart(2, '0')}`}
            </div>
          )}
        </CountdownCircleTimer>
        <svg>
          <defs>
            <linearGradient id="your-unique-id" x1="1" y1="0" x2="0" y2="0">
              <stop offset="5%" stopColor="#3357FF" />
              <stop offset="95%" stopColor="#33FFF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <h2 className="mode">Break</h2>
      <div className="mb-6">
        <div>
          <p className="text-lg text-slate-100">Break Length</p>
          <div className="mb-6">
            <div className="mt-6">
              <p className="text-lg text-slate-100">Session Length</p>
              <div className="counter">
                <button className="btn text-xl" onClick={() => handleBreakChange(-1)}>
                  -
                </button>
                <span className="text-white text-xl m-2">{breakLength}</span>
                <button className="btn text-xl" onClick={() => handleBreakChange(1)}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-16">
        <div className="row" id="btns">
          <button className="btn btn-default btn-lg" onClick={handleStart}>
            Start
          </button>
          <button className="btn btn-default btn-lg" onClick={handleStop}>
            Stop
          </button>
          <button className="btn btn-default btn-lg" onClick={reloadPage}>
            Clear
          </button>
          <button className="btn btn-default btn-lg" onClick={handleFinishSession}>
            Finish Session
          </button>
        </div>
      </div>
      {showCongrats && <Congratulations mode={'break'} onClose={handleCloseCongrats} />}
    </div>
  )
}

export default BreakTimer
