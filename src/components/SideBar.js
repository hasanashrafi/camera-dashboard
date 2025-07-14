'use client'
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOff } from "react-icons/io";
import AlertCard from './templates/AlertCard';
import { alerts } from '@/data/cameraList';


function SideBar() {
  const [alertsHide, setAlertHide] = useState(false)
  return (
    <div className='flex flex-col gap-y-4 self-start  rounded-xl p-4 w-full md:w-1/2'>
      {/* actions */}
      <div className='flex flex-col p-3 rounded-md  space-y-3 bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-xl'>
        <h2 className='text-xl font-medium mb-4 text-sky-500'>Quick Actions</h2>
        <button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2'>
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

      {/* alerts */}
      <div className='flex flex-col space-y-2 p-3 rounded-md bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-xl'>
        <div className='flex items-center justify-between'>
          <h2 className='flex items-center gap-x-3 text-xl font-medium mb-4 text-sky-500'>Recent Alerts
            <IoMdNotificationsOff className='cursor-pointer size-5 text-red-300 ' onClick={() => setAlertHide(alertsHide => !alertsHide)} />
          </h2>

          <span className='bg-red-300 p-0.25 px-1 text-sm  rounded text-red-800 mb-4'>
            3 new
          </span>
        </div>

        {
          alertsHide ? null : (
            <>
              {alerts.map(alert => (<AlertCard key={alert.id} alert={alert} />))}

            </>
          )
        }
      </div>

      {/* system status */}
      <div className='p-3 rounded-md bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-xl'>
        <h2 className='text-xl font-medium mb-4 text-sky-500'>System Status</h2>
        <div className='flex flex-col gap-y-2'>
          <div className='flex items-center justify-between'>
            <p>
              Networks
            </p>
            <span className='text-green-500'>
              <span className='size-2 bg-green-500 rounded-full inline-block mr-1'></span>
              Online</span>
          </div>

          <div className='flex items-center justify-between'>
            <p>
              Storage
            </p>
            <span className='text-yellow-500'>
              <span className='size-2 bg-yellow-500 rounded-full inline-block mr-1'></span>

              76%</span>
          </div>
          <div className='flex items-center justify-between'>
            <p>
              Backup
            </p>
            <span className='text-green-500'>
              <span className='size-2 bg-green-500 rounded-full inline-block mr-1'></span>
              Active</span>
          </div>

          <div className='flex items-center justify-between'>
            <p>
              Firewall
            </p>
            <span className='text-green-500'>
              <span className='size-2 bg-green-500 rounded-full inline-block mr-1'></span>
              Protected</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideBar
