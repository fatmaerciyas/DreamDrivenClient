// src/Menu.js
import { FaHome, FaCogs, FaUser, FaEnvelope } from 'react-icons/fa'

const Menu = () => {
  return (
    <div className="fixed top-0 right-0 w-16 h-full bg-gradient-to-b  backdrop-blur-lg  text-black flex flex-col items-center py-4">
      <div className="flex flex-col space-y-6">
        <a
          href="#home"
          className="text-2xl hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center"
        >
          <FaHome />
        </a>
        <a
          href="#services"
          className="text-2xl hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center"
        >
          <FaCogs />
        </a>
        <a
          href="#about"
          className="text-2xl hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center"
        >
          <FaUser />
        </a>
        <a
          href="#contact"
          className="text-2xl hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  )
}

export default Menu
