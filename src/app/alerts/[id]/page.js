import AlertDetailPage from '@/components/AlertDetailPage'
import { alerts } from '@/data/cameraList';
import React from 'react'

function AlertDetail({params}) {
    const alert = alerts.find(a => a.id === Number(params.id));

    if (!alert) return <div>Alert not found</div>;
    return (
        <AlertDetailPage alert={alert} />
    )
}

export default AlertDetail
