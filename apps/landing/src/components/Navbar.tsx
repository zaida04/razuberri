import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const topbar = {
    "Home": "/",

} as const;

export const genNav = Object.keys(topbar).map((key) => (
    <li className="text-xl" key={key}>
        <Link href={topbar[key as keyof typeof topbar]}>{key}</Link>
    </li>
));

export default function Navbar() {
    return <div className="flex flex-row justify-between items-center">
        <div className="px-2 mx-2 ">
            <h2 className="font-bold">
                <Link href="/" className="hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 transition-all duration-500 ease-in-out hover-animate-gradient">
                    Razuberri
                </Link>
            </h2>
        </div>
        <div>
            <div className="block md:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <FontAwesomeIcon className="text-xl w-8 h-8 drawer-button" icon={faBars} />
                </label>
            </div>

            <div className="hidden md:flex lg:block">
                <ul className="menu space-x-8 menu-horizontal">
                    {genNav}
                    <Link href="/install">
                        <button className="btn btn-primary">
                            Install
                        </button>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
}