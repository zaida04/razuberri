import { useRouter } from "next/router";
import { genNav } from "./Navbar";

export default function Sidebar() {
    const router = useRouter();

    return <div className="drawer-side w-full">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-8 w-80 bg-base-100 h-full gap-2">
            <h2 className="mb-8 text-3xl font-bold">Razuberri</h2>
            {genNav}
            <li className="w-full">
                <button onClick={() => router.push("/install")} className="btn btn-primary flex align-middle">Get Started</button>
            </li>
        </ul>
    </div>
}