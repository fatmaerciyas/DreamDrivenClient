import { useState } from 'react'
import ParallaxEffect from './Effects/ParallaxEffect'
import BottomMenu from './BottomMenu'
import bg2 from '../../../assets/bg2.jpg'
import ShootingStarsEffect from './Effects/ShootingStarsEffect'
import RainEffect from './Effects/RainEffect'
import ParticleEffect from './Effects/ParticleEffect'
import SnowEffect from './Effects/SnowEffect'
import LeavesEffect from './Effects/LeavesEffect'
import { Outlet } from 'react-router-dom'
import '../../../assets/index.css'
import Menu from './Menu'

const Homepage = () => {
  const [background, setBackground] = useState(`url(${bg2})`)
  const [effect, setEffect] = useState('ParallaxEffect')

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

  return (
    <div
      className="min-w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Menu />
      {renderEffect()}
      <div className="flex flex-col h-screen justify-center items-center text-center pb-32 text-black p-8">
        <Outlet />
      </div>
      <BottomMenu setBackground={setBackground} setEffect={setEffect} />
    </div>
  )
}

export default Homepage
