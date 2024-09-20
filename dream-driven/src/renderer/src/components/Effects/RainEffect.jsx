import '../../../../assets/rainEffect.css'

import { useEffect } from 'react'

const RainEffect = () => {
  useEffect(() => {
    const rainContainer = document.querySelector('.rains')
    const numberOfDrops = 50 // Adjust number of raindrops here

    for (let i = 0; i < numberOfDrops; i++) {
      const drop = document.createElement('div')
      drop.className = 'drop'
      drop.style.left = `${Math.random() * 100}vw` // Random horizontal position
      drop.style.animationDuration = `${Math.random() * 1 + 0.5}s` // Random duration between 0.5s and 1.5s
      rainContainer.appendChild(drop)
    }
  }, [])

  return (
    <div className="rainContainer">
      <div className="rains"></div>
    </div>
  )
}

export default RainEffect
