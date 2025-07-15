'use client'
import React, { useState } from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOff } from "react-icons/io";
import AlertCard from './templates/AlertCard';
import { alerts } from '@/data/cameraList';
import Link from 'next/link';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import ActionsCard from './templates/ActionsCard';
import SystemStatusCard from './templates/SystemStatusCard';


function SideBar() {
  const [alertsHide, setAlertHide] = useState(false)
  return (
    <div className='flex flex-col gap-y-4 self-start  rounded-xl p-4 w-full md:w-1/2'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* actions */}
      <ActionsCard />

      {/* alerts */}
      <div className='flex flex-col space-y-2 p-3 rounded-md bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-xl'>
        <div className='flex items-center justify-between'>
          <h2 className='flex items-center gap-x-3 text-xl font-medium mb-4 text-sky-500'>Recent Alerts
            <IoMdNotificationsOff className='cursor-pointer size-5 text-gray-500 ' onClick={() => setAlertHide(alertsHide => !alertsHide)} />
          </h2>
          <span className='bg-red-300 p-0.25 px-1 text-sm  rounded text-red-800 mb-4'>
            3 new
          </span>
        </div>

        {
          alertsHide ? null : (
            <>
              {alerts.map(alert => (
                <Link href={`/alerts/${alert.id}`} key={alert.id}>
                  <AlertCard alert={alert} />
                </Link>
              ))}

            </>
          )
        }
      </div>

      {/* system status */}
      <SystemStatusCard />
    </div>
  )
}

export default SideBar
