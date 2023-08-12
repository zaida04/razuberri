import Link from "next/link";

export const topbar = {
    "Home": "/",
    "Docs": "/docs",
} as const;

export const genNav = Object.keys(topbar).map((key) => (
    <li className="text-xl" key={key}>
        <Link href={topbar[key as keyof typeof topbar]}>{key}</Link>
    </li>
));

export default function Navbar() {
    return <div className="flex flex-row justify-between">
        <div className="flex-1 px-2 mx-2">
            <h2 className="font-bold">
                <Link href="/">
                    Razuberri
                </Link>
            </h2>
        </div>
        <div className="flex-none hidden lg:block">
            <ul className="menu space-x-8 menu-horizontal">
                {genNav}
                <button className="px-6 border-2 border-black text-black rounded-xl hover:bg-black hover:text-white font-medium transition-colors">
                    <Link href="/install">
                        Install
                    </Link>
                </button>
            </ul>
        </div>
    </div>
}