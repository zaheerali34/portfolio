import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Home() {
  return (
    <section id="home" className='w-full py-8 sm:py-12 lg:py-16'>
      <div className="space-y-4 sm:space-y-6">
        <h1 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight'>
          Hi, I'm <span className="text-blue-400">Zaheer Rahman</span>
        </h1>
        <h2 className='text-zinc-300 font-medium text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl'>
          Frontend Developer | From Problem to Production-Ready, at Scale
        </h2>
        <p className='text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed'>
          Passionate about creating beautiful, responsive, and user-friendly web applications that solve real-world problems.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1qDvyv2ju6LXqLmXPKBfRNfp6e2DdGYGy/view"
            className="inline-block"
          >
            <button className='w-full sm:w-auto border border-zinc-400 hover:border-blue-400 text-blue-500 hover:text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-300 cursor-pointer py-3 px-6 rounded-full flex items-center justify-center gap-2'>
              <i className="ri-drive-line text-lg"></i> 
              <span>Resume, CV</span>
            </button>
          </a>
          
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className='w-full sm:w-auto border border-zinc-600 hover:border-zinc-400 text-white hover:text-zinc-200 font-semibold hover:bg-zinc-800/50 transition-all duration-300 cursor-pointer py-3 px-6 rounded-full flex items-center justify-center gap-2'
          >
            <i className="ri-arrow-down-line text-lg"></i>
            <span>View My Work</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home