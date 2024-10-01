import '../../../assets/index.css'
import HomeIcon from '../../../assets/icons/Home.png'
import BookIcon from '../../../assets/icons/Spell Book 3D Model.png'
import SettingsIcon from '../../../assets/icons/Settings.png'
import ClockIcon from '../../../assets/icons/Clock.png'
import SpellBookIcon from '../../../assets/icons/Spell Book.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const navigate = useNavigate()
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const menuItems = [
    { icon: HomeIcon, name: 'MonthlyTodo', route: '/todo' },
    { icon: BookIcon, name: 'Pomodoro', route: '/pomodoro' },
    { icon: SettingsIcon, name: 'Notebook', route: '/notebook' },
    { icon: ClockIcon, name: 'Pomodoro', route: '/pomodoro' },
    { icon: SpellBookIcon, name: 'Agenda', route: '/agenda' }
  ]

  const handleItemClick = (route) => {
    navigate(route) // Navigate to the specified route
  }

  return (
    <div className="fixed top-20 right-0 w-16 h-full bg-gradient-to-b backdrop-blur-sm text-orange-400 flex items-center justify-center">
      <div className="flex flex-col space-y-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="icon-wrapper flex flex-col items-center cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleItemClick(item.route)} // Call the click handler
          >
            <img
              src={item.icon}
              alt={`${item.name} Icon`}
              className="w-16 h-auto rounded-full bg-transparent bg-opacity-20 p-2 transition-transform transform hover:scale-110 hover:rotate-12 shadow-md"
            />
            <span
              className={`text-sm transition-opacity duration-300 ease-in-out ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
