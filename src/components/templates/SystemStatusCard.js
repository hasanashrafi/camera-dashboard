import React from 'react'

function SystemStatusCard() {
  return (
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
  )
}

export default SystemStatusCard
