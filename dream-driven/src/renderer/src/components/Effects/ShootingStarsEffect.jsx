import { useEffect } from 'react'
import '../../../../assets/shootingStartsEffect.css'

export default function ShootingStarsEffect() {
  useEffect(() => {
    const stars = document.querySelectorAll('.star')

    stars.forEach((star) => {
      const randomTopOffset = Math.random() * 10 // Random top offset from 0 to 100vh
      const randomLeftOffset = Math.random() * 150 // Random left starting position
      const randomFallDuration = Math.random() * 2 + 3 // Duration between 3s and 5s
      const randomFallDelay = Math.random() * 5 // Random delay

      star.style.setProperty('--top-offset', `${randomTopOffset}vh`)
      star.style.setProperty('--left-offset', `${randomLeftOffset}vw`)
      star.style.setProperty('--fall-duration', `${randomFallDuration}s`)
      star.style.setProperty('--fall-delay', `${randomFallDelay}s`)
      star.style.setProperty('--rotation', `rotate(${Math.random() * 60}deg)`) // Random rotation
    })
  }, [])

  return (
    <div className="stars">
      {Array.from({ length: 50 }, (_, index) => (
        <div className="star" key={index}></div>
      ))}
    </div>
  )
}
