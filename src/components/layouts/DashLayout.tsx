import Navbar from "./Navbar";

export default function DashLayout(props: { children: React.ReactNode }) {
    return <div className="flex flex-col items-center">
        <div className="w-4/5 my-8 gap-8">
            <Navbar />
            <div>
                {props.children}
            </div>
        </div>
    </div>
}