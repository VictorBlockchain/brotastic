'use client'

import { useState } from 'react'
import { Orbitron } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

const orbitron = Orbitron({ subsets: ['latin'] })

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'Video', 'Buy', 'Merch', 'Roadmap', 'Socials']

  return (
    <header className="p-6 flex justify-between items-center relative bg-gradient-to-r from-purple-600 to-blue-500">
      <h1 className={`text-4xl font-bold text-white ${orbitron.className}`}>Brotastic</h1>
      <nav>
        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-white hover:text-yellow-300 transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-purple-600 md:hidden">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-4 text-white hover:bg-purple-700 transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500"></div>
    </header>
  )
}