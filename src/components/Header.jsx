import React, { useState } from 'react'
// icons
import { RiCheckboxBlankCircleFill, RiCloseLine, RiMenu3Fill } from "react-icons/ri";

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className='flex w-full justify-between md:justify-start items-center py-4 px-8 h-[10vh] z-50'>
      <div className='md:w-1/6 text-center -mt-4'>
        <a href='#' className='text-2xl font-bold relative p-1 bg-white'>
          Power<span className='text-primary text-5xl'>.</span> 
          <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' />
        </a>
      </div>
      <nav className={`fixed bg-white w-[80%] xl:w-full h-full ${ showMenu ? 'left-0' : '-left-full' } top-0 md:static flex-1 flex flex-col md:flex-row items-center justify-center gap-10 transition-all duration-500`}>
        <a href="#" className=''>Home</a>
        <a href="#" className=''>About Us</a>
        <a href="#" className=''>Services</a>
        <a href="#" className=''>Products</a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className='text-2xl p-2 md:hidden'>
        { showMenu ? <RiCloseLine /> : <RiMenu3Fill /> }
      </button>
    </header>
  )
}