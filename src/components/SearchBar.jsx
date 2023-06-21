import React, { useContext, useState } from 'react'
import {CiSearch} from 'react-icons/ci'
import useTheme from '../context/useTheme'
import GithubContext from '../context/apicontext/GithubContext'
const SearchBar = () => {
    const {theme,toggleTheme} = useTheme()
    const [searchTerm,setSearchTerm] = useState('')
    const {user,searchUser,error,message} = useContext(GithubContext)

    const handleForm = (e) =>{
        setSearchTerm(e.target.value)
    }
   const handleSubmit = (e) =>{
    e.preventDefault()
    if(searchTerm === ''){
        alert('Enter user')
    }else{
        searchUser(searchTerm)
        setSearchTerm('')
    }
   }
   console.log(user)
  return (
    <form onSubmit={handleSubmit} className={`lg:w-[45%] md:w-[60%] w-[90%] flex justify-between items-center bg-${theme==='light'?'cWhite':'dark'} px-2 py-2 md:px-4 rounded-md`}>
      <div className='flex gap-2 justify-center items-center'>
        <span><CiSearch className='text-Lightblue text-lg'/></span>
        <input value={searchTerm} onChange={handleForm} className={`border-0 text-cLightGray focus:outline-none font-spacemono text-sm bg-${theme ==='light'?'White':'[#000]'}`} placeholder='Search Github username...'/>
      </div>
      <div className='flex gap-2 items-center'>
        <span className='text-sm text-red-500'>{error && `${message}`}</span>
        <button className='bg-Lightblue px-2 py-1 md:px-4 md:py-2 rounded-md text-cWhite md:text-xl text-[13px]'>Search</button>
      </div>
    </form>
  )
}

export default SearchBar
