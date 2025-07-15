import React from 'react'
import { PiSecurityCamera } from "react-icons/pi";
import { MdOutlineStorage } from "react-icons/md";
import { GoAlert } from "react-icons/go";
import { FaChartLine } from "react-icons/fa6";
import Link from 'next/link';


function NavBar() {


  return (
    <div className='w-full flex flex-wrap items-center justify-center  p-2 gap-2 '>

      <div className='flex items-center justify-center rounded-md p-2 bg-gradient-to-b from-slate-900 to-slate-700 w-1/3  md:w-[295px] h-24'>
        <div className='flex items-center gap-x-2 justify-center text-sky-400 '>
          <PiSecurityCamera className='size-7' />
          <span className='text-2xl'>4/5</span>
        </div>

      </div>
     
      <div className=' flex items-center justify-center rounded-md p-2   bg-gradient-to-b from-slate-900  to-slate-700 w-1/3  md:w-[295px] h-24'>
        <Link href="/alerts">
          <div className=' flex items-center gap-x-2 justify-center text-yellow-400 animate-pulse '>
            <GoAlert className='size-7' />
            <span className='text-2xl'>3</span>
          </div>
        </Link>

      </div>
      <div className='flex items-center justify-center rounded-md p-2  bg-gradient-to-b from-slate-900 to-slate-700 w-1/3  md:w-[295px] h-24'>
        <div className='flex items-center gap-x-2 justify-center text-green-400 '>
          <MdOutlineStorage className='size-7' />
          <span className='text-2xl'>76%</span>
        </div>

      </div>

      <div className='flex items-center justify-center rounded-md p-2  bg-gradient-to-b from-slate-900 to-slate-700 w-1/3  md:w-[295px] h-24'>
        <div className='flex items-center gap-x-2 justify-center text-purple-400 '>
          <FaChartLine className='size-7' />
          <span className='text-2xl'>99.9%</span>
        </div>

      </div>
    </div>
  )
}

export default NavBar
