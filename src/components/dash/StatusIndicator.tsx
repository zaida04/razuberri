const colors = {
    "online": "bg-green-500",
    "offline": "bg-red-500",
    "unknown": "bg-yellow-500"
}

export default function StatusIndicator(props: { status: string; }) {
    return <div className={`w-3 h-3 rounded-full ${colors[props.status as keyof typeof colors]}`}></div>
}