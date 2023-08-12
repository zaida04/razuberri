import DashLayout from "@/components/dash/DashLayout"
import Member from "@/components/dash/Member"

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
            <h1 className="text-2xl mb-4">Your Members</h1>
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