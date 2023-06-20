import React, { useContext } from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsLink45Deg,BsFillBuildingFill,BsTwitter} from 'react-icons/bs'
import GithubContext from '../context/apicontext/GithubContext'
// import {HiBuildingOffice2} from 'react-icons/hi'
const CardDetails = () => {
    const {user} = useContext(GithubContext)
  return (
    <div className='flex flex-col lg:w-[45%] md:w-[60%] w-[90%] bg-cWhite rounded-sm gap-4 p-4'>
      <div className='flex gap-5 items-center w-full'>
       <span className='border-1 rounded-[50%] bg-cLightgray w-[80px] h-[60px] md:w-[120px] md:h-[95px] flex items-center justify-center'>
        {user?.avatar_url !==null ? <img src={user.avatar_url} alt={user.name} width='80' className='rounded-full'/>:'Avatar'}
       </span>
        <div className='flex w-full flex-col lg:flex-row justify-start md:justify-between items-start'>
            <div className='flex flex-col'>
            <span className='font-spacemono text-sm md:text-md text-bold'>{user?.name}</span>
            <span className='text-spacemono text-[10px] text-Lightblue'>{user?.login}</span>
            </div>
            <div>
                <span className='text-[10px] text-cGray font-spacemono'>{user?.created_at}</span>
            </div>
        </div>
     </div> 
     <div className='flex flex-col gap-3 self-end lg:w-[80%] w-full'>
        <p className='text-[10px] font-spacemono text-cLightgray'>
            {
                user.bio ? user.bio :
                `Lorem, ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus est aperiam 
                voluptatum ipsa ea, molestiae adipisci. Nisi, autem! 
                Earum, tempora.
                `
            }
        </p>
        <div className='w-full px-[2rem] py-3 flex justify-between bg-[#F6F8FF] rounded-sm'>
            <div className='flex flex-col gap-1'>
                <span className='text-[10px] text-cGray font-spacemono'>Repos</span>
                <span className='text-bold'>{user?.public_repos}</span>
                </div>
            <div  className='flex flex-col gap-1'>
                <span className='text-[10px] text-cGray font-spacemono'>followers</span>
                <span className='text-bold'>{user?.followers}</span>
            </div>
            <div  className='flex flex-col gap-1'>
                <span className='text-[10px] text-cGray font-spacemono'>following</span>
                <span className='text-bold'>{user?.following}</span>
            </div>
        </div>
        <div className='grid md:grid-cols-2 gap-2 grid-cols-1 '>
           <div className="flex gap-2 items-center">
            <span><FaMapMarkerAlt className='text-cLightgray text-sm'/></span>
            <p className='text-sm text-cLightgray text-bold'>{user?.location !== null?user.location:'No location'}</p>
           </div>
           <div className="flex gap-2 items-center">
            <span><BsTwitter className='text-mDark text-sm'/></span>
            <p className='text-sm text-mDark text-bold'>{user?.location !== null?user?.location:'Not Available'}</p>
           </div>
           <div className="flex gap-2 items-center">
            <span><BsLink45Deg className='text-cLightgray text-sm'/></span>
            <p className='text-sm text-cLightgray text-bold'>{user?.url}</p>
           </div>
           <div className="flex gap-2 items-center">
            <span><BsFillBuildingFill className='text-cLightgray text-sm'/></span>
            <p className='text-sm text-cLightgray text-bold text-sm'>@github</p>
           </div>
        </div>
       </div>
    </div>
  )
}

export default CardDetails
