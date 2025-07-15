import React from 'react'

function AlertCard({ alert }) {

    return (
        <>

            <div className='flex items-center justify-between p-2 rounded-lg bg-gradient-to-tr from-[#1e293b] to-[#334155] hover:drop-shadow-2xl transition-all border border-[#475569] shadow-xl'>
                <div>
                    <p className='text-sm'>{alert.name}</p>
                    <span className='text-xs text-gray-400'>{alert.location}</span>
                    <p className='text-xs text-gray-400'>{alert.time.toLocaleString()}</p>
                </div>
                <p
                    className={`${alert.status === "normal"
                        ? "bg-yellow-500"
                        : alert.status === "low"
                            ? "bg-orange-500"
                            : alert.status === "high"
                                ? "bg-red-500"
                                : ""
                        } rounded-md py-1 px-3 w-20 text-center`}
                >
                    {alert.status}
                </p>
            </div>




        </>
    )
}

export default AlertCard
