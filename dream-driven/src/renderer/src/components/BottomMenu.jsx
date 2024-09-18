import PropTypes from 'prop-types'
import '../../../assets/index.css'
import HomeIcon from '../../../assets/icons/Home.png'
import BookIcon from '../../../assets/icons/Spell Book 3D Model.png'
import SettingsIcon from '../../../assets/icons/Settings.png'
import ClockIcon from '../../../assets/icons/Clock.png'
import SpellBookIcon from '../../../assets/icons/Spell Book.png'
import bg from '../../../assets/bg.jpg'
import bg2 from '../../../assets/bg2.jpg'
import bg3 from '../../../assets/bg3.jpg'
import bg4 from '../../../assets/bg4.jpg'
import bg5 from '../../../assets/bg5.jpg'
import bg6 from '../../../assets/bg6.jpg'
import { useState } from 'react'

const ToggleButton = ({ isActive, onClick }) => {
  const activeCls = isActive ? 'bg-cyan-500 text-white' : 'bg-gray-300 text-gray-700'
  const knobPosition = isActive ? 'translate-x-full' : 'translate-x-0'

  return (
    <button
      className={`relative flex items-center justify-between w-12 rounded-xl border-2 transition-all duration-300 ${activeCls}`}
      onClick={onClick}
    >
      <span
        className={`block w-6 h-6 bg-gradient-to-b from-gray-900 to-gray-400 rounded-full border-2 transition-transform duration-300 ${knobPosition}`}
      ></span>
    </button>
  )
}

const BottomMenu = ({ setBackground, setEffect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [activeBoxIndex, setActiveBoxIndex] = useState(null)
  const [activeSecondBoxIndex, setActiveSecondBoxIndex] = useState(null)

  const [toggles, setToggles] = useState([
    { name: 'Parallax', isActive: false },
    { name: 'ShootingStars', isActive: false },
    { name: 'Start', isActive: false },
    { name: 'Space', isActive: false },
    { name: 'Bubbles', isActive: false },
    { name: 'Rain', isActive: false }
  ])

  const handleToggle = (index) => {
    setToggles((prev) =>
      prev.map((toggle, i) => ({
        ...toggle,
        isActive: i === index // Only the clicked toggle is active
      }))
    )

    // Update the effect based on the selected toggle
    const effects = [
      'WindEffect',
      'ShootingStars',
      'StartEffect',
      'SpaceEffect',
      'BubblesEffect',
      'ToggleFEffect'
    ]
    setEffect(effects[index]) // Assuming you have corresponding effect names

    console.log('Effect is', effects[index])
  }

  const menuItems = [
    { icon: HomeIcon, name: 'Home' },
    { icon: BookIcon, name: 'Books' },
    { icon: SettingsIcon, name: 'Settings' },
    { icon: ClockIcon, name: 'Pomodoro' },
    { icon: SpellBookIcon, name: 'Agenda' }
  ]

  const images = [bg, bg2, bg3, bg4, bg5, bg6]

  const handleImageClick = (image) => {
    console.log('Image clicked:', image)
    setBackground(`url(${image})`)
  }

  const handleMenuItemClick = (index) => {
    if (index === 0) {
      setActiveBoxIndex(activeBoxIndex === index ? null : index) // First box toggle
    } else if (index === 1) {
      setActiveSecondBoxIndex(activeSecondBoxIndex === index ? null : index) // Second box toggle
    }
  }

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg p-1 backdrop-blur-xs text-orange-300 flex justify-around">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="icon-wrapper flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleMenuItemClick(index)} // Use unified click handler
        >
          <img
            src={item.icon}
            alt={`${item.name} Icon`}
            className="w-10 h-auto rounded-full bg-transparent bg-opacity-20 p-1 transition-transform transform hover:scale-110 hover:rotate-12 shadow-md"
          />
          <span
            className={`text-xs transition-opacity duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
          >
            {item.name}
          </span>
        </div>
      ))}

      {activeBoxIndex === 0 && (
        <div className="absolute bottom-16 left-32 transform -translate-x-1/2 bg-transparent backdrop-blur p-4 rounded-lg shadow-lg z-10 w-full overflow-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Images</h2>
            <button
              className="text-xl font-bold"
              onClick={() => setActiveBoxIndex(null)} // Close first box
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-auto rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
      )}

      {activeSecondBoxIndex === 1 && (
        <div className="absolute bottom-16 right-32 transform translate-x-1/2 bg-transparent backdrop-blur-sm p-4 rounded-lg shadow-lg z-10 w-full overflow-auto">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg">Toggle Options</h2>
            <button
              className="text-xl font-bold"
              onClick={() => setActiveSecondBoxIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {toggles.map((toggle, index) => (
              <div key={index} className="flex items-center justify-between my-2">
                <span className="text-sm font-medium">{toggle.name}</span>{' '}
                {/* Use the unique name here */}
                <ToggleButton isActive={toggle.isActive} onClick={() => handleToggle(index)} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

BottomMenu.propTypes = {
  setBackground: PropTypes.func.isRequired
}

export default BottomMenu
