import React, { useState } from 'react'
import Logo from '/logo.jpg'

function Header() {
  const [navOpen, setNavOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setNavOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className='w-full py-4 sm:py-6 text-white flex flex-wrap items-center justify-between'>
      <div className="flex items-center">
        <img src={Logo} alt="logo" className='w-12 sm:w-14 md:w-16 rounded-full object-cover' />
        <span className="ml-3 text-lg sm:text-xl font-bold text-white hidden sm:block">Zaheer Rahman</span>
      </div>

      <button
        className='lg:hidden text-white border border-zinc-600 hover:border-zinc-400 px-3 py-2 rounded-lg cursor-pointer transition-all duration-300 bg-zinc-800/50 hover:bg-zinc-700/50'
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle navigation menu"
      >
        <i className={`ri-${navOpen ? 'close' : 'menu'}-line text-lg`}></i>
      </button>

      <nav className={`w-full lg:w-auto mt-4 lg:mt-0 transition-all duration-300 ${
        navOpen ? 'block' : 'hidden'
      } lg:block`}>
        <ul className='flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-8 text-white bg-zinc-900/50 lg:bg-transparent rounded-lg lg:rounded-none p-4 lg:p-0'>
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className='font-medium cursor-pointer text-sm sm:text-base hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50 w-full lg:w-auto text-left lg:text-center'
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('projects')}
              className='font-medium cursor-pointer text-sm sm:text-base hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50 w-full lg:w-auto text-left lg:text-center'
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('contact')}
              className='font-medium cursor-pointer text-sm sm:text-base hover:text-blue-400 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-zinc-800/50 w-full lg:w-auto text-left lg:text-center'
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header