import { useEffect, useState } from 'react'
import '../../../assets/congratulations.css'

const GIFs = {
  pomodoro: [
    'https://giphy.com/embed/BPJmthQ3YRwD6QqcVD',
    'https://giphy.com/embed/DypHcxyEqRzHi',
    'https://giphy.com/embed/F2WFyAfpfVfFe',
    'https://giphy.com/embed/6nuiJjOOQBBn2',
    'https://giphy.com/embed/d31w24psGYeekCZy',
    'https://giphy.com/embed/lI6nHr5hWXlu0',
    'https://giphy.com/embed/URvPrD21hbYZTtxTUy',
    'https://giphy.com/embed/dyRef09PjzUiqxQzXs',
    'https://giphy.com/embed/QTAVEex4ANH1pcdg16'
  ],
  break: [
    'https://giphy.com/embed/F2WFyAfpfVfFe',
    'https://giphy.com/embed/6nuiJjOOQBBn2',
    'https://giphy.com/embed/BPJmthQ3YRwD6QqcVD',
    'https://giphy.com/embed/DypHcxyEqRzHi',
    'https://giphy.com/embed/F2WFyAfpfVfFe',
    'https://giphy.com/embed/6nuiJjOOQBBn2',
    'https://giphy.com/embed/d31w24psGYeekCZy',
    'https://giphy.com/embed/lI6nHr5hWXlu0',
    'https://giphy.com/embed/URvPrD21hbYZTtxTUy',
    'https://giphy.com/embed/dyRef09PjzUiqxQzXs',
    'https://giphy.com/embed/QTAVEex4ANH1pcdg16'
    // Add more Break GIF URLs here
  ]
}

const Congratulations = ({ mode, onClose }) => {
  const [randomGif, setRandomGif] = useState('')

  useEffect(() => {
    const gifs = GIFs[mode] // Select the GIF array based on mode
    const randomIndex = Math.floor(Math.random() * gifs.length)
    setRandomGif(gifs[randomIndex])
  }, [mode])

  return (
    <div className="congratulations-overlay">
      <div className="congratulations-box">
        <div className="giphy-container">
          <iframe
            src={randomGif}
            width="350"
            height="200"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a className="text-left" href={randomGif}>
              via GIPHY
            </a>
          </p>
        </div>
        <p className="text-2xl font-bold">Congratulations</p>
        <p className="text-xl font-bold">Time's up buddy. Good work!</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default Congratulations
