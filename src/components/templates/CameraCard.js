'use client'

import Image from 'next/image';
import React from 'react'
import { AiOutlineExpand } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";


function CameraCard({ camera, onFullScreen }) {


  return (
    <>

      <div className=' p-5  rounded-xl md:last:col-span-2 bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-xl'>
        <div className='flex items-center justify-between'>
          <div>
            <p className='md:text-xl'>
              {camera.name}
            </p>
            <span className='text-xs text-zinc-400'>{camera.locationRecord}</span>

          </div>
          <div className='flex items-center gap-x-2'>
            <p className={`${camera.status === "offline" ? "bg-red-600" : " bg-green-500/70 "} animate-pulse px-1.5 py-0.5 rounded`}>
              {camera.status}</p>
            <AiOutlineExpand className='size-5'
              onClick={onFullScreen} />
          </div>

        </div>
        <div className='bg-slate-900 flex flex-col space-y-3 items-center justify-center rounded-xl w-full h-64 mt-2 mx-auto'>
          {
            camera.status === "Live" ? (
              <Image src={camera.liveImage} alt='camera' width={400} height={100} priority className='bg-cover  h-auto rounded-md' />
            ) : <p className='text-center flex flex-col items-center justify-center text-red-400/50'>
              <BsFillCameraVideoFill className='size-7' />
              {camera.status}
            </p>
          }
        </div>
      </div>

    </>
  )
}

export default CameraCard
