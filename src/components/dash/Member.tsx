import { Button } from "../ui/Button";
import RoleSelect from "./RoleSelect";

interface MemberData {
    id: number
    name: string;
    email: string;
    role: string;
}

export default function Member(props: MemberData) {
    return <div className="flex flex-row justify-between px-16 py-4">
        <div className="flex flex-row gap-6">
            <div className="w-12 h-12 bg-black rounded-full"></div>

            <div className="flex flex-col justify-center">
                <p className="font-semibold">{props.name}</p>
                <p>{props.email}</p>
            </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
            <RoleSelect defaultRole={props.role} />
            <Button variant="destructive">Delete</Button>
        </div>
    </div>
}