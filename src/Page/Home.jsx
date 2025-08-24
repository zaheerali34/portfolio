import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Home() {
  return (
    <div className='w-full'>
        <h1 className='text-white font-bold text-3xl mt-5'>Hi, I'm Zaheer Rahman</h1>
        <h3 className='text-zinc-300 font-semibold text-xl mt-3'>Frontend Developer | From Problem to Production-Ready, at Scale</h3>
        <a 
        target="_blank" 
        href="https://drive.google.com/file/d/1qDvyv2ju6LXqLmXPKBfRNfp6e2DdGYGy/view">
          <button className='mt-5 border-1 border-zinc-400 text-blue-500 font-semibold hover:text-blue-600 transition-all duration-300 cursor-pointer py-2 px-5 rounded-full'><i class="ri-drive-line"></i> Resume, CV</button>
        </a>
    </div>
  )
}

export default Home