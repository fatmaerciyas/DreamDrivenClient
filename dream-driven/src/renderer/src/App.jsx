import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/HomePage'
import '../../assets/index.css'
import Clock from './components/Clock'
import MainPage from './components/MainPage'
import SpotifyEmbed from './components/SpotifyEmbed'
import MonthlyTodos from './components/MonthlyTodos'
import PomodoroTimer from './components/PomodoroTimer'
import Notebook from './components/Notebook'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="clock" element={<Clock />} />
          <Route path="main" element={<MainPage />} />
          <Route path="spotify" element={<SpotifyEmbed />} />
          <Route path="todo" element={<MonthlyTodos />} />
          <Route path="pomodoro" element={<PomodoroTimer />} />
          <Route path="notebook" element={<Notebook />} />
          {/* <Route path="room" element={<Room />} /> */}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
