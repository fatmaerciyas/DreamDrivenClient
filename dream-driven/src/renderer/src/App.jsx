import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/HomePage'
import '../../assets/index.css'
import Clock from './components/Clock'
import MainPage from './components/MainPage'
import SpotifyEmbed from './components/SpotifyEmbed'
import Room from './components/Room'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path="clock" element={<Clock />} />
          <Route path="main" element={<MainPage />} />
          <Route path="spotify" element={<SpotifyEmbed />} />
          <Route path="room" element={<Room />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
