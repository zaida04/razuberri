import DashLayout from "@/components/dash/DashLayout"
import ServerCard, { Server } from "@/components/dash/ServerCard"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Dialog, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/Dialog"
import { Label } from "@radix-ui/react-label"
import Link from "next/link"

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
            <div className="flex flex-row justify-between mb-2">
                <h1 className="text-2xl mb-4">Your Servers</h1>
                <CreateServerButton />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {dummyData.map((server, i) =>
                    <ServerCard key={i} {...server} />
                )}
            </div>
        </div>
    </DashLayout>
}

function CreateServerButton() {
    return <Dialog>
        <DialogTrigger>
            <Button variant="default">
                Add New Server
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Create New Server</DialogTitle>
                <DialogDescription>
                    Add a new server. Once you fill in these details, you can move on to connecting the relay server.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Name
                    </Label>
                    <Input id="name" placeholder="Server 54" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                        Description
                    </Label>
                    <Input id="description" placeholder="This server is in charge of something" className="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Link href={`/servers/newId`}><Button type="submit">Create New</Button></Link>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}