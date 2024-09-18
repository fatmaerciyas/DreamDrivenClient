import { useState } from 'react'
import ParallaxEffect from './Effects/ParallaxEffect' // Default effect
import BottomMenu from './BottomMenu'
import bg2 from '../../../assets/bg2.jpg' // Default background
import ShootingStartsEffect from './Effects/ShootingStarsEffect'

const Homepage = () => {
  const [background, setBackground] = useState(`url(${bg2})`) // Use imported image for default
  const [effect, setEffect] = useState('ParallaxEffect') // Default effect

  const renderEffect = () => {
    switch (effect) {
      case 'ShootingStars':
        return <ShootingStartsEffect />
      // case 'RainEffect':
      //   return <RainEffect />
      // case 'StartEffect':
      //   return <StartEffect />
      // case 'SpaceEffect':
      //   return <SpaceEffect />
      // case 'BubblesEffect':
      //   return <BubblesEffect />
      // case 'ToggleFEffect':
      //   return <ToggleFEffect />
      default:
        return <ParallaxEffect />
    }
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
        <div>
          <h1 className="text-4xl font-bold mb-4">Welcome to My Homepage</h1>
          <p className="text-lg">
            This is a sample homepage with a full background image and a fancy menu on the right
            side.
          </p>
        </div>
      </div>
      <BottomMenu setBackground={setBackground} setEffect={setEffect} />
    </div>
  )
}

export default Homepage
