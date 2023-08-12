import DashLayout from "@/components/dash/DashLayout"
import Member from "@/components/dash/Member"
import { Button } from "@/components/ui/Button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/Dialog"
import { Input } from "@/components/ui/Input"
import { Label } from "@radix-ui/react-label"
import { Link } from "lucide-react"

const dummyData = [
    {
        id: 1,
        "email": "test@email.com",
        "name": "Test User",
        "role": "Admin"
    },
    {
        id: 2,
        "email": "test2@email.com",
        "name": "Test User 2",
        "role": "Member"
    },
    {
        id: 3,
        "email": "test3@email.com",
        "name": "Test User 3",
        "role": "Member"
    },
]

export default function Members() {
    return <DashLayout>
        <div>
            <div className="flex flex-row justify-between mt-1 mb-3">
                <h1 className="text-xl text-gray-500 mb-4">Your Members</h1>
                <InviteNewUserButton />
            </div>
            <div className="flex flex-col gap-1 border rounded-xl bg-white">
                <div className="w-full px-4 py-3 rounded-t-xl text-gray-500 bg-gray-100">
                    <p>Members</p>
                </div>
                {dummyData.map((member, i) =>
                    <Member key={i} {...member} />
                )}
            </div>
        </div>
    </DashLayout>
}

function InviteNewUserButton() {
    return <Dialog>
        <DialogTrigger>
            <Button variant="default">
                Add New Member
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Invite New Member</DialogTitle>
                <DialogDescription>
                    Have a partner you want to grant access to your servers? Invite them with ease here.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Full Name
                    </Label>
                    <Input id="name" placeholder="Joe Schmoe" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Email
                    </Label>
                    <Input id="email" placeholder="test@email.com" className="col-span-3" />
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Invite</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}