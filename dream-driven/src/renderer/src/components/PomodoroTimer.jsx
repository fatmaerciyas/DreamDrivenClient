import { useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '../../../assets/pomodoro.css'
import beepSound from '../../../assets/beep.mp3'
import Congratulations from './Congratulations'

const PomodoroTimer = () => {
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)
  const [isRunning, setIsRunning] = useState(false)
  const [currentMode, setCurrentMode] = useState('pomodoro')
  const [showCongrats, setShowCongrats] = useState(false)

  const duration = currentMode === 'pomodoro' ? sessionLength * 60 : breakLength * 60

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true)
    }
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleClear = () => {
    setIsRunning(false)
    setCurrentMode('pomodoro')
    setSessionLength(25)
    setBreakLength(5)
    setShowCongrats(false)
  }

  const onComplete = () => {
    const audio = new Audio(beepSound)
    audio.play()

    // Show congratulatory message
    setShowCongrats(true)

    // Stop the timer
    setIsRunning(false)

    // Switch modes
    if (currentMode === 'pomodoro') {
      setCurrentMode('break')
      return [true, breakLength * 60]
    } else {
      setCurrentMode('pomodoro')
      return [true, sessionLength * 60]
    }
  }

  const handleCloseCongrats = () => {
    setShowCongrats(false)
    // When closing congrats, start break timer if it's break mode
    if (currentMode === 'break') {
      setIsRunning(true)
    }
  }

  return (
    <div className="pomodoro backdrop-blur-sm">
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
      <h2 className="mode">{currentMode === 'pomodoro' ? 'Pomodoro' : 'Break'}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-lg text-slate-100">Session Length</p>
          <div className="counter">
            <button
              className="btn"
              onClick={() => setSessionLength(Math.max(1, sessionLength - 1))}
            >
              -
            </button>
            <span>{sessionLength}</span>
            <button className="btn" onClick={() => setSessionLength(sessionLength + 1)}>
              +
            </button>
          </div>
        </div>
        <div>
          <p className="text-lg text-slate-100">Break Length</p>
          <div className="counter">
            <button className="btn" onClick={() => setBreakLength(Math.max(1, breakLength - 1))}>
              -
            </button>
            <span>{breakLength}</span>
            <button className="btn" onClick={() => setBreakLength(breakLength + 1)}>
              +
            </button>
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
          <button className="btn btn-default btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      </div>
      {showCongrats && <Congratulations mode={currentMode} onClose={handleCloseCongrats} />}
    </div>
  )
}

export default PomodoroTimer
