import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import GradientText from "./GradientText";

export const topbar = {
    "Home": "/",
    "Support": "mailto:me@nico.engineer"
} as const;

export const genNav = Object.keys(topbar).map((key) => {
    const link = topbar[key as keyof typeof topbar];
    return <li className="text-xl" key={key}>
        {link.startsWith("mailto:") ? <a href={link}>{key}</a> : <Link href={topbar[key as keyof typeof topbar]}>{key}</Link>}
    </li>
});

export default function Navbar() {
    return <div className="flex flex-row justify-between items-center">
        <div className="px-2 mx-2 ">
            <h2 className="font-bold">
                <GradientText from="from-yellow-400" via="via-red-500" to="to-purple-600">
                    <Link href="/">
                        Razuberri
                    </Link>
                </GradientText>
            </h2>
        </div>
        <div>
            <div className="block md:hidden">
                <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                    <FontAwesomeIcon className="text-xl w-8 h-8 drawer-button" icon={faBars} fixedWidth />
                </label>
            </div>

            <div className="hidden md:flex lg:block">
                <ul className="menu space-x-6 menu-horizontal">
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