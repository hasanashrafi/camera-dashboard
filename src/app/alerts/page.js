import React from 'react'
import { alerts } from '@/data/cameraList'
import Link from 'next/link'

function AlertsPage() {
  // Status badge color logic
  const getStatusColor = (status) => {
    if (status === 'normal') return 'bg-yellow-500';
    if (status === 'low') return 'bg-orange-500';
    if (status === 'high') return 'bg-red-500';
    return 'bg-slate-500';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 bg-slate-950">
      <h2 className="text-3xl font-bold mb-10 text-sky-500 text-center">All Alerts</h2>
      <div className="w-full max-w-3xl flex flex-col gap-8">
        {alerts.map(alert => (
          <div key={alert.id} className="p-6 rounded-xl bg-gradient-to-tr from-[#1e293b] to-[#334155] shadow-2xl border border-[#475569] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">ID:</span>
                <span className="text-gray-200 font-mono">{alert.id}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Name:</span>
                <span className="text-gray-200 font-semibold">{alert.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Location:</span>
                <span className="text-gray-300 font-mono">{alert.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">Time:</span>
                <span className="text-gray-300 font-mono">{alert.time}</span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-4 min-w-[120px]">
              <span className={`text-white px-3 py-1 rounded-md font-semibold capitalize ${getStatusColor(alert.status)}`}>{alert.status}</span>
              <Link href={`/alerts/${alert.id}`} className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg transition-colors font-medium shadow text-center w-full">View Detail</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlertsPage
