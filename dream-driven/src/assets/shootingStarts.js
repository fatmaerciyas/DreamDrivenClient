import { useEffect } from 'react'
import '../../../../assets/shootingStartsEffect.css'
import '../../../../assets/shootingStarts.js'

export default function ShootingStartsEffect() {
  useEffect(() => {
    const stars = document.querySelectorAll('.star')

    stars.forEach((star) => {
      const randomFallDuration = Math.random() * 5 + 5 // Random between 5s and 10s
      const randomTopOffset = Math.random() * 100 // Random top offset from 0 to 100vh
      const randomFallDelay = Math.random() * 10 // Random delay

      star.style.setProperty('--fall-duration', `${randomFallDuration}s`)
      star.style.setProperty(`--top-offset`, `${randomTopOffset}vh`)
      star.style.setProperty('--fall-delay', `${randomFallDelay}s`)
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
