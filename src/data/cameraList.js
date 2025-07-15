const cameraList = [
    {
        id: 1,
        name: "camera-1",
        locationRecord: "parking",
        status: "Live",
        liveImage: "/images/parking.jpg"
    },
    {
        id: 2,
        name: "camera-2",
        locationRecord: "office",
        status: "Live",
        liveImage: "/images/office.webp"
    },
    {
        id: 3,
        name: "camera-3",
        locationRecord: "back office",
        status: "offline",
        liveImage: "/images/backOffice.jpg"
    },
    {
        id: 4,
        name: "camera-4",
        locationRecord: "network room",
        status: "Live",
        liveImage: "/images/networkroom.jpg"
    },
    {
        id: 5,
        name: "camera-5",
        locationRecord: "front office",
        status: "offline",
        liveImage: "/images/frontOffice.jpg"
    }
]

const systemDetails = [
    {
        systemName: "office Security",
        location: " tabriz",
        uptime: "36 days",
        totalCameras: 5,
        activeCameras: 4,
        version: "1.0.0",
        storage: {

            capacity: "1000GB",
            usedStorage: "76%",
            status: "access"
        },
        network: {
            status: "Live",
            firewall: "active",
            uptime: "99%"
        },


    }
]

const alerts = [
    {
        id: 10,
        name: "motion detected",
        camera: "1",
        location: "parking",
        time: "7/15/2025, 08:22:48 AM",
        status: "normal"
    },
    {
        id: 11,
        name: "motion detected",
        camera: "4",
        location: "network room",
        time: "7/15/2025, 10:38:50 AM",
        status: "low"
    },
    {
        id: 12,
        name: "motion detected",
        camera: "2",
        location: " office",
        time: "7/15/2025, 12:53:50 AM",
        status: "high"
    },
]

export { cameraList, systemDetails, alerts }