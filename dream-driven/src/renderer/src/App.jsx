import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Homepage from './components/HomePage'
import SpotifyEmbed from './components/SpotifyEmbed'
import '../../assets/index.css'
import Clock from './components/Clock'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/spotify" element={<SpotifyEmbed />} />
        <Route path="/clock" element={<Clock />} />{' '}
        {/* <Route path="*" element={<NotFound />} /> Optional: Catch-all route */}
      </Routes>
    </Router>
  )
}

export default App
