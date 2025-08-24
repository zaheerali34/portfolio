import React from 'react'
import Logo from '/logo.jpg'

function Header() {
  return (
    <div className='w-full py-6 text-white flex items-center justify-between gap-[30rem]'>
        <img src={Logo} alt="logo" className='w-[60px] rounded-full object-cover' />

        <nav>
            <ul className='flex items-center gap-6 text-white'>
                <li className='font-semibold cursor-pointer text-md hover:text-zinc-300 transition-all duration-500'>Home</li>
                <li className='font-semibold cursor-pointer text-md hover:text-zinc-300 transition-all duration-500'>Project</li>
                <li className='font-semibold cursor-pointer text-md hover:text-zinc-300 transition-all duration-500'>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header