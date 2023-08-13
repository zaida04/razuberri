export default function GradientText(props: { from: string; via: string; to: string; children: React.ReactNode; }) {
    return <span className={`hover:text-transparent bg-clip-text bg-gradient-to-r ${props.from} ${props.via} ${props.to} transition-all duration-300 ease-in-out hover-animate-gradient`}>
        {props.children}
    </span>
}