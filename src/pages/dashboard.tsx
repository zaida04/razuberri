import DashLayout from "@/components/dash/DashLayout"
import ServerCard, { Server } from "@/components/dash/ServerCard"

const dummyData: Server[] = [
    {
        id: 1,
        name: "Server 1",
        "description": "This is a server",
        "ip": "192.168.1.0",
        "status": "online"
    },
    {
        id: 2,
        name: "Server 2",
        "description": "This is a server",
        "ip": "192.168.1.1",
        "status": "offline"
    },
    {
        id: 3,
        name: "Server 3",
        "description": "This is a server",
        "ip": "192.168.1.2",
        "status": "offline"
    },
    {
        id: 4,
        name: "Server 4",
        "description": "This is a server",
        "ip": "192.168.1.3",
        "status": "unknown"
    },
    {
        id: 5,
        name: "Server 5",
        "description": "This is a server",
        "ip": "192.168.1.4",
        "status": "offline"
    },
]

export default function Dashboard() {
    return <DashLayout>
        <div>
            <h1 className="text-2xl mb-4">Your Servers</h1>
            <div className="grid grid-cols-3 gap-4">
                {dummyData.map((server, i) =>
                    <ServerCard key={i} {...server} />
                )}
            </div>
        </div>
    </DashLayout>
}