// Homepage.js
import { useState } from 'react'
import ParallaxEffect from './Effects/ParallaxEffect' // Default effect
import BottomMenu from './BottomMenu'
import bg2 from '../../../assets/bg2.jpg' // Default background
import ShootingStarsEffect from './Effects/ShootingStarsEffect'
import RainEffect from './Effects/RainEffect'
import ParticleEffect from './Effects/ParticleEffect'
import SnowEffect from './Effects/SnowEffect'
import LeavesEffect from './Effects/LeavesEffect'
import SpotifyEmbed from './SpotifyEmbed' // Import the Spotify component
import Clock from './Clock'
import { Outlet } from 'react-router-dom'

const Homepage = () => {
  const [background, setBackground] = useState(`url(${bg2})`)
  const [effect, setEffect] = useState('ParallaxEffect')
  const [showSpotify, setShowSpotify] = useState(false) // State for Spotify visibility

  const renderEffect = () => {
    switch (effect) {
      case 'ShootingStars':
        return <ShootingStarsEffect />
      case 'Rain':
        return <RainEffect />
      case 'Particle':
        return <ParticleEffect />
      case 'Snow':
        return <SnowEffect />
      case 'Leaves':
        return <LeavesEffect />
      default:
        return <ParallaxEffect />
    }
  }

  const handleSpotifyClick = () => {
    setShowSpotify(true)
  }

  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {renderEffect()}
      <div className="flex-1 flex items-center justify-center text-center text-white p-8">
        <Outlet />

        {/* <div>
          <Clock />
          <h1 className="text-3xl font-bold mb-4">Welcome to My Homepage</h1>
          <p className="text-lg">
            This is a sample homepage with a full background image and a fancy menu on the right
            side.
          </p>
        </div>
        <SpotifyEmbed show={showSpotify} onClose={() => setShowSpotify(false)} /> */}
      </div>
      <BottomMenu
        setBackground={setBackground}
        setEffect={setEffect}
        setShowSpotify={handleSpotifyClick} // Use the click handler
      />
    </div>
  )
}

export default Homepage
