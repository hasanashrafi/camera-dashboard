import Image from 'next/image';
import React from 'react'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { RiCloseCircleLine } from "react-icons/ri";


function FullScreenCameraCard({camera,onClose}) {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-slate-800 flex z-50 p-5 items-center justify-center h-screen'>
     <div className=' max-w-6xl w-full h-full'>
          <div className='flex items-center justify-between'>
            <p className='md:text-xl'>
              {camera.name}
            <span className='ml-4 text-xs text-zinc-400'>{camera.locationRecord}</span>
            </p>

          <div className='flex items-center gap-x-2'>
            <p className={`${camera.status === "offline" ? "bg-red-600" : " bg-green-500/70 "} animate-pulse px-1 py-0.5 rounded-md`}>
            {camera.status}</p>
            <RiCloseCircleLine onClick={onClose} className='size-7 text-white bg-red-600 rounded-full p-0.5' />

          </div>
          </div>

        <div className='bg-slate-900 flex items-center justify-center rounded-xl w-full h-full mt-2 mx-auto'>
        <Image src={camera.liveImage} alt='camera' width={900} height={100} priority className='bg-cover  h-full rounded-md' />

        </div>
        </div>
    </div>
  )
}

export default FullScreenCameraCard
