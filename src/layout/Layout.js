'use client'

import React, { useState, useEffect } from 'react';
import { IoIosTimer } from "react-icons/io";
import { PiSecurityCameraFill } from "react-icons/pi";



function Layout({ children }) {
    const [currentTime, setCurrentTime] = useState('');

    function updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
        setCurrentTime(timeString);
    }

    useEffect(() => {
        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='text-white'>
            <header className=' bg-slate-800 opacity-bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 '>
              <div className='max-w-7xl mx-auto px-4 py-6 flex items-center justify-between'>
              <div className='flex items-center gap-x-2'>
                    <PiSecurityCameraFill className='size-6 ' />
                    <p className='text-sm md:text-2xl bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent'>
                    Security Dashboard
                    </p>

                </div>
                <div className='flex items-center  gap-x-4'>
                    <div className='text-sm flex items-center gap-x-1'>
                        <span className='inline-block rounded-full size-2 bg-lime-400 animate-pulse'></span>
                        <p className='text-lime-400'>System Online</p>
                    </div>
                    <p className='hidden md:flex items-center gap-x-2'>
                        {currentTime}
                        <IoIosTimer className='size-5' />
                    </p>

                </div>
              </div>
            </header>
            <div className='min-h-screen bg-slate-800'>
                {children}
            </div>
            
        </div>
    );
}

export default Layout;