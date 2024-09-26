// import { useState, useEffect } from 'react'
// import '../../../assets/pomodoro.css' // Import the CSS for styling
// import FlipCountdown from '@rumess/react-flip-countdown'

const PomodoroTimer = () => {
  // const [workTime, setWorkTime] = useState(25 * 60) // Default 25 minutes
  // const [breakTime, setBreakTime] = useState(5 * 60) // Default 5 minutes
  // const [isActive, setIsActive] = useState(false)
  // const [isBreak, setIsBreak] = useState(false)
  // const [timeRemaining, setTimeRemaining] = useState(workTime)

  // useEffect(() => {
  //   let timer
  //   if (isActive) {
  //     timer = setInterval(() => {
  //       setTimeRemaining((prev) => {
  //         if (prev <= 0) {
  //           setIsBreak((prev) => !prev)
  //           return isBreak ? workTime : breakTime
  //         }
  //         return prev - 1
  //       })
  //     }, 1000)
  //   }
  //   return () => clearInterval(timer)
  // }, [isActive, isBreak, workTime, breakTime])

  // const handleStart = () => {
  //   if (!isActive) {
  //     setIsActive(true)
  //     setTimeRemaining(isBreak ? breakTime : workTime)
  //   }
  // }

  // const handlePause = () => setIsActive(false)

  // const handleReset = () => {
  //   setIsActive(false)
  //   setIsBreak(false)
  //   setTimeRemaining(workTime)
  // }

  return (
    <>
      <p
        className="codepen"
        data-height="300"
        data-default-tab="css,result"
        data-slug-hash="wgwqBB"
        data-pen-title="Pomodoro Clock"
        data-editable="true"
        data-user="putraaryotama"
        style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
      >
        <span>
          See the Pen <a href="https://codepen.io/putraaryotama/pen/wgwqBB">Pomodoro Clock</a> by
          Putra Aryotama (<a href="https://codepen.io/putraaryotama">@putraaryotama</a>) on{' '}
          <a href="https://codepen.io">CodePen</a>.
        </span>
      </p>
      <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
    </>
    // <div className="pomodoro-timer">
    //   <FlipCountdown
    //     theme="dark"
    //     hideYear
    //     hideMonth
    //     hideDay
    //     endAtZero
    //     endAt={new Date(Date.now() + timeRemaining * 1000).toISOString()}
    //   />
    //   <div className="controls">
    //     {isActive ? (
    //       <button className="btn" onClick={handlePause}>
    //         Pause
    //       </button>
    //     ) : (
    //       <button className="btn" onClick={handleStart}>
    //         Start
    //       </button>
    //     )}
    //     <button className="btn" onClick={handleReset}>
    //       Reset
    //     </button>
    //   </div>
    //   <input
    //     type="number"
    //     value={workTime / 60}
    //     onChange={(e) => setWorkTime(e.target.value * 60)}
    //     placeholder="Work minutes"
    //     className="input"
    //   />
    //   <input
    //     type="number"
    //     value={breakTime / 60}
    //     onChange={(e) => setBreakTime(e.target.value * 60)}
    //     placeholder="Break minutes"
    //     className="input"
    //   />
    // </div>
  )
}

export default PomodoroTimer
