import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";

const roleList = ["Admin", "Member"];

export default function RoleSelect(props: { defaultRole: string }) {
    return <Select>
        <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={props.defaultRole} />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value={props.defaultRole}>{props.defaultRole}</SelectItem>
            {roleList.filter(x => x !== props.defaultRole).map((role, i) =>
                <SelectItem key={i} value={role}>{role}</SelectItem>
            )}
        </SelectContent>
    </Select>
}