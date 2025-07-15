import React from 'react'
import { FaDownload, FaPlay } from 'react-icons/fa6'
import { IoSettingsOutline } from 'react-icons/io5'

function ActionsCard() {
  return (
    <div className='flex flex-col p-3 rounded-md  space-y-3 bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-xl'>
    <h2 className='text-xl font-medium mb-4 text-sky-500'>Quick Actions</h2>
    <button onClick={() => toast.success("ضبط ویدئو شروع شد")} className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2'>
      <FaPlay className='mr-2' />
      Start Recording
    </button>
    <button className='w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2'>
      <FaDownload className='mr-2' />
      Export File
    </button>
    <button className='w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2'>
      <IoSettingsOutline className='mr-2' />
      Setting
    </button>
  </div>
  )
}

export default ActionsCard
