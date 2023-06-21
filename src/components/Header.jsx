import React from 'react'
import {MdDarkMode,MdLightMode} from 'react-icons/md'
import useTheme from '../context/useTheme'
const Header = () => {
    const {theme,toggleTheme} = useTheme()
  return (
    <div className='flex lg:w-[45%] md:w-[60%] w-[90%] mx-auto justify-between items-center mt-[5rem]'>
      <h1 className={`font-spacemono text-lg text-${theme==='light'?'dDark':'cWhite'}`}>devfinder</h1>
      <div className='flex gap-2 items-center'>
        <span className='uppercase text-sm text-cLightgray text-mDark font-spacemono'>
           {theme=== 'light' ? 'Dark':'Light'}
            </span>
        {
            theme === 'light' ?  <span><MdDarkMode onClick={toggleTheme} className='text-cLightgray text-lg'/></span> :
            <span><MdLightMode onClick={toggleTheme} className='text-White text-lg'/></span>
        }
       
      </div>
    </div>
  )
}

export default Header
