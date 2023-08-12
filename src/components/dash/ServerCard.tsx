import Link from "next/link";
import StatusIndicator from "./StatusIndicator";

export interface Server {
    id: number;
    name: string;
    description: string;
    ip: string;
    status: "online" | "offline" | "unknown";
}

export default function ServerCard(props: Server) {
    return <Link href={`/servers/${props.id}`}>
        <div className="flex flex-col gap-2 w-full border border-slate-200 rounded-lg p-4 shadow-sm hover:border-black hover:shadow-xl hover:cursor-pointer transition-all">
            <div>
                <div className="flex flex-row justify-between">
                    <h4 className="font-semibold">{props.name}</h4>
                    <StatusIndicator status={props.status} />
                </div>
                <p className="text-gray-500">{props.ip}</p>
            </div>
            <p className="text-gray-500">{props.description}</p>
        </div>
    </Link>
}