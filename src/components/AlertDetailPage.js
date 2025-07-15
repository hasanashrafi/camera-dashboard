import React from 'react'
import Link from 'next/link'

function AlertDetailPage({ alert }) {
    
    let statusColor = '';
    if (alert.status === 'normal') statusColor = 'bg-yellow-500';
    else if (alert.status === 'low') statusColor = 'bg-orange-500';
    else if (alert.status === 'high') statusColor = 'bg-red-500';
    else statusColor = 'bg-slate-500';

    return (
        <div className="  flex items-center justify-center  p-6 h-screen ">
            <div className='w-1/2 p-5 mx-auto  rounded-xl bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-2xl border border-[#475569]'>
                <h2 className="text-2xl font-bold mb-6 text-sky-500 text-center">Alert Detail</h2>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">ID:</span>
                        <span className="text-gray-200 font-mono">{alert.id}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Name:</span>
                        <span className="text-gray-200 font-semibold">{alert.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Status:</span>
                        <span className={`text-white px-3 py-1 rounded-md font-semibold capitalize ${statusColor}`}>{alert.status}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 text-sm">Time:</span>
                        <span className="text-gray-300 font-mono">{alert.time}</span>
                    </div>
                    
                </div>
                <div className="mt-8 flex justify-center">
                    <Link href="/" className="bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-lg transition-colors font-medium shadow">Back to Dashboard</Link>
                </div>
            </div>
        </div>
    )
}

export default AlertDetailPage
