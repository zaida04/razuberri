import StatusIndicator from "./StatusIndicator";

export interface Server {
    id: number;
    name: string;
    description: string;
    ip: string;
    status: "online" | "offline" | "unknown";
}

export default function ServerCard(props: Server) {
    return <div className="flex flex-col gap-2 w-full border border-slate-200 rounded-lg p-4 shadow-sm hover:border-black hover:shadow-xl hover:cursor-pointer transition-all">
        <div>
            <div className="flex flex-row justify-between">
                <h2 className="text-xl font-semibold">{props.name}</h2>
                <StatusIndicator status={props.status} />
            </div>
            <p className="text-gray-500 text-sm">{props.ip}</p>
        </div>
        <p className="text-gray-500">{props.description}</p>
    </div>
}