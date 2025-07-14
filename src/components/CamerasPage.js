'use client'
import { cameraList } from '@/data/cameraList'
import React, { useState } from 'react'
import CameraCard from './templates/CameraCard'
import FullScreenCameraCard from './templates/FullScreenCameraCard';

function CamerasPage() {
  const [onFullScreen, setonFullScreen] = useState(false);
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 p-4'>
      {cameraList.map(camera =>
        onFullScreen === camera.id ? (
          <FullScreenCameraCard
            key={camera.id}
            camera={camera}
            onClose={() => setonFullScreen(null)}
          />
        ) : (
          <CameraCard
            key={camera.id}
            fullScreenCameraId={onFullScreen}
            setFullScreenCameraId={setonFullScreen}
            camera={camera}
            onFullScreen={() => setonFullScreen(camera.id)}
          />
        )
      )}
    </div>
  )
}

export default CamerasPage
